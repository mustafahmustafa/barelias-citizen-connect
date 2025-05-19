
import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { Family } from '@/pages/FamiliesDirectory';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import MobileFamilyCard from './MobileFamilyCard';
import { useMobile } from '@/hooks/use-mobile';

interface FamiliesTableProps {
  families: Family[];
  onFamilySelect: (family: Family) => void;
}

type SortField = 'familyName' | 'members' | 'unificationNumber';
type SortDirection = 'asc' | 'desc';

const FamiliesTable: React.FC<FamiliesTableProps> = ({ families, onFamilySelect }) => {
  const [sortField, setSortField] = useState<SortField>('familyName');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const isMobile = useMobile();

  // Handle sort toggle
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      // Toggle direction if already sorting by this field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New sort field, default to ascending
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Apply sorting
  const sortedFamilies = [...families].sort((a, b) => {
    const modifier = sortDirection === 'asc' ? 1 : -1;
    
    if (sortField === 'members') {
      return (a.members - b.members) * modifier;
    } else {
      // For string fields
      const aValue = a[sortField]?.toString().toLowerCase() || '';
      const bValue = b[sortField]?.toString().toLowerCase() || '';
      return aValue.localeCompare(bValue) * modifier;
    }
  });

  // Render sort indicator icon
  const renderSortIcon = (field: SortField) => {
    if (field !== sortField) return null;
    return sortDirection === 'asc' ? 
      <ArrowUp className="inline ml-1 h-4 w-4" aria-label="sorted ascending" /> : 
      <ArrowDown className="inline ml-1 h-4 w-4" aria-label="sorted descending" />;
  };

  // Mobile view
  if (isMobile) {
    return (
      <div>
        {sortedFamilies.length > 0 ? (
          sortedFamilies.map((family) => (
            <MobileFamilyCard 
              key={family.id} 
              family={family} 
              onClick={() => onFamilySelect(family)}
            />
          ))
        ) : (
          <div className="text-center py-10 border rounded-md">
            <p>No families found. Try a different search term.</p>
          </div>
        )}
      </div>
    );
  }

  // Desktop view
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                onClick={() => handleSort('familyName')} 
                className="cursor-pointer hover:bg-muted"
                aria-sort={sortField === 'familyName' ? sortDirection : undefined}
              >
                Family Name {renderSortIcon('familyName')}
              </TableHead>
              <TableHead 
                onClick={() => handleSort('members')} 
                className="cursor-pointer hover:bg-muted text-right"
                aria-sort={sortField === 'members' ? sortDirection : undefined}
              >
                Number of Members {renderSortIcon('members')}
              </TableHead>
              <TableHead 
                onClick={() => handleSort('unificationNumber')} 
                className="cursor-pointer hover:bg-muted"
                aria-sort={sortField === 'unificationNumber' ? sortDirection : undefined}
              >
                Unification Number {renderSortIcon('unificationNumber')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedFamilies.length > 0 ? (
              sortedFamilies.map((family, index) => (
                <TableRow 
                  key={family.id}
                  onClick={() => onFamilySelect(family)}
                  className="cursor-pointer hover:bg-muted"
                  data-state={index % 2 === 0 ? 'odd' : 'even'}
                >
                  <TableCell className="font-medium">{family.familyName}</TableCell>
                  <TableCell className="text-right">{family.members}</TableCell>
                  <TableCell>{family.unificationNumber}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  No families found. Try a different search term.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FamiliesTable;
