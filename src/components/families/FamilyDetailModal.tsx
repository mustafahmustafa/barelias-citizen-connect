
import React from 'react';
import { FileText, Download } from 'lucide-react';
import type { Family } from '@/pages/FamiliesDirectory';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface FamilyDetailModalProps {
  family: Family;
  isOpen: boolean;
  onClose: () => void;
}

const FamilyDetailModal: React.FC<FamilyDetailModalProps> = ({ family, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Function to mock downloading a PDF
  const handleDownloadPDF = () => {
    alert(`PDF for ${family.familyName} family would download here.`);
  };

  // Function to mock editing a record
  const handleEditRecord = () => {
    alert(`Edit form for ${family.familyName} family would open here.`);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-labelledby="family-detail-title"
      aria-modal="true"
    >
      <Card 
        className="w-full max-w-2xl max-h-[90vh] overflow-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader>
          <CardTitle id="family-detail-title" className="text-2xl text-primary">
            {family.familyName} Family
          </CardTitle>
          <CardDescription>
            Unification Number: {family.unificationNumber}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Family Details</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Head of Household:</span> {family.headOfHousehold}</p>
                <p><span className="font-medium">Address:</span> {family.address}</p>
                <p><span className="font-medium">Number of Members:</span> {family.members}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Contact Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Phone:</span> (Sample) +961-X-XXXXXXX</p>
                <p><span className="font-medium">Email:</span> (Sample) contact@example.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Family Members</h3>
            <div className="border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Age
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-gray-200">
                  {family.familyMembers?.map((member, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                      <td className="px-4 py-3 whitespace-nowrap">{member.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{member.age}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{i === 0 ? 'Head of Household' : 'Member'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-3 pt-4">
          <Button 
            variant="outline" 
            onClick={onClose}
          >
            Close
          </Button>
          <div className="flex gap-3">
            <Button 
              variant="secondary" 
              onClick={handleEditRecord}
            >
              <FileText className="mr-2 h-4 w-4" />
              Edit Record
            </Button>
            <Button 
              onClick={handleDownloadPDF}
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FamilyDetailModal;
