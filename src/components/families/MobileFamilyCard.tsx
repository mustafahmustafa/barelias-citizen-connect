
import React from 'react';
import type { Family } from '@/pages/FamiliesDirectory';
import { Card, CardContent } from '@/components/ui/card';

interface MobileFamilyCardProps {
  family: Family;
  onClick: () => void;
}

const MobileFamilyCard: React.FC<MobileFamilyCardProps> = ({ family, onClick }) => {
  return (
    <Card 
      className="mb-4 cursor-pointer hover:border-primary transition-colors card-hover" 
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-primary">{family.familyName}</h3>
            <span className="bg-muted px-2 py-1 rounded text-xs">
              {family.members} members
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Unification #: {family.unificationNumber}
          </p>
          <div className="mt-2 text-xs text-muted-foreground flex items-center">
            <span>Tap for details</span>
            <svg 
              className="ml-1 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileFamilyCard;
