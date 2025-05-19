import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowUp, 
  ArrowDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import FamiliesTable from '@/components/families/FamiliesTable';
import FamilyDetailModal from '@/components/families/FamilyDetailModal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Sample data - in a real app this would come from an API
const sampleFamilies = [
  { id: 1, familyName: "Abboud", members: 5, unificationNumber: "LEB-10025" },
  { id: 2, familyName: "Mansour", members: 4, unificationNumber: "LEB-10078" },
  { id: 3, familyName: "Khoury", members: 6, unificationNumber: "LEB-10104" },
  { id: 4, familyName: "Ibrahim", members: 3, unificationNumber: "LEB-10231" },
  { id: 5, familyName: "Haddad", members: 7, unificationNumber: "LEB-10256" },
  { id: 6, familyName: "Nassar", members: 4, unificationNumber: "LEB-10312" },
  { id: 7, familyName: "Saleh", members: 5, unificationNumber: "LEB-10389" },
  { id: 8, familyName: "Nader", members: 2, unificationNumber: "LEB-10412" },
  { id: 9, familyName: "Shahin", members: 6, unificationNumber: "LEB-10534" },
  { id: 10, familyName: "Maloof", members: 3, unificationNumber: "LEB-10567" },
  { id: 11, familyName: "Aoun", members: 4, unificationNumber: "LEB-10623" },
  { id: 12, familyName: "Saad", members: 5, unificationNumber: "LEB-10689" },
  { id: 13, familyName: "Younes", members: 7, unificationNumber: "LEB-10732" },
  { id: 14, familyName: "Zakhour", members: 4, unificationNumber: "LEB-10804" },
  { id: 15, familyName: "Tabet", members: 6, unificationNumber: "LEB-10855" },
  { id: 16, familyName: "Gerges", members: 5, unificationNumber: "LEB-10911" },
  { id: 17, familyName: "Nahas", members: 3, unificationNumber: "LEB-10967" },
  { id: 18, familyName: "Moussa", members: 4, unificationNumber: "LEB-11023" },
  { id: 19, familyName: "Kanaan", members: 6, unificationNumber: "LEB-11078" },
  { id: 20, familyName: "Frem", members: 5, unificationNumber: "LEB-11134" },
  { id: 21, familyName: "Madi", members: 4, unificationNumber: "LEB-11189" },
  { id: 22, familyName: "Assaf", members: 7, unificationNumber: "LEB-11245" },
  { id: 23, familyName: "Harb", members: 3, unificationNumber: "LEB-11301" },
  { id: 24, familyName: "Chahine", members: 5, unificationNumber: "LEB-11356" },
  { id: 25, familyName: "Samaha", members: 6, unificationNumber: "LEB-11412" },
  { id: 26, familyName: "Dagher", members: 4, unificationNumber: "LEB-11467" },
  { id: 27, familyName: "Sarkis", members: 5, unificationNumber: "LEB-11523" },
  { id: 28, familyName: "Geagea", members: 3, unificationNumber: "LEB-11578" },
  { id: 29, familyName: "Khalil", members: 6, unificationNumber: "LEB-11634" },
  { id: 30, familyName: "Barakat", members: 4, unificationNumber: "LEB-11689" }
];

export interface Family {
  id: number;
  familyName: string;
  members: number;
  unificationNumber: string;
  address?: string;
  headOfHousehold?: string;
  familyMembers?: {name: string, age: number}[];
}

const FamiliesDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFamily, setSelectedFamily] = useState<Family | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  // Filter families based on search term
  const filteredFamilies = sampleFamilies.filter(family => 
    family.familyName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    family.unificationNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculation
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFamilies = filteredFamilies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFamilies.length / itemsPerPage);

  // Handle family selection for modal
  const handleFamilySelect = (family: Family) => {
    // In a real app, we'd fetch complete family details here
    // For demo purposes, we'll add some mock data
    const fullFamilyData = {
      ...family,
      address: "123 Main Street, Bar Elias",
      headOfHousehold: `${family.familyName} Patriarch`,
      familyMembers: Array(family.members).fill(0).map((_, i) => ({
        name: `${family.familyName} Family Member ${i + 1}`,
        age: 20 + i * 5
      }))
    };
    
    setSelectedFamily(fullFamilyData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFamily(null);
  };

  return (
    <div className="container-custom section-padding">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/services">Services</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Family Registry</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Families Directory</h1>
        <p className="text-muted-foreground">
          View and search all registered families in the Municipality of Bar Elias
        </p>
      </div>

      {/* Search Box */}
      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-grow max-w-md">
          <Input
            type="text"
            placeholder="Search by family name or unification number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            aria-label="Search families"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Button variant="outline" onClick={() => setSearchTerm('')} className="hidden sm:flex">
          Clear Search
        </Button>
      </div>
      
      {/* Table */}
      <FamiliesTable 
        families={currentFamilies} 
        onFamilySelect={handleFamilySelect}
      />

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
        <p className="text-sm text-muted-foreground">
          Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredFamilies.length)} of {filteredFamilies.length} families
        </p>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          
          <div className="text-sm font-medium">
            Page {currentPage} of {totalPages || 1}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>

      {/* Family Detail Modal */}
      {isModalOpen && selectedFamily && (
        <FamilyDetailModal 
          family={selectedFamily} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default FamiliesDirectory;
