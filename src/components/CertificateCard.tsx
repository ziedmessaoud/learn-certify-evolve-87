
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download } from "lucide-react";
import { format } from "date-fns";

interface CertificateCardProps {
  id: string;
  courseTitle: string;
  studentName: string;
  issueDate: Date;
  instructor: string;
  onDownload?: () => void;
}

const CertificateCard = ({
  id,
  courseTitle,
  studentName,
  issueDate,
  instructor,
  onDownload
}: CertificateCardProps) => {
  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="bg-primary text-white">
        <CardTitle className="text-xl flex items-center">
          <Award className="mr-2 h-5 w-5" />
          Certificat d'accomplissement
        </CardTitle>
        <CardDescription className="text-white/80">
          ID: CERT-{id}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif mb-1">{studentName}</h3>
          <p className="text-gray-500">a complété avec succès</p>
          <h2 className="text-xl font-semibold mt-2 mb-1">{courseTitle}</h2>
          <p className="text-gray-500">dispensé par {instructor}</p>
        </div>
        
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <div>
            <p>Date d'obtention</p>
            <p className="font-medium text-gray-700">{format(issueDate, 'dd MMMM yyyy')}</p>
          </div>
          <div className="text-right">
            <p>Validité</p>
            <p className="font-medium text-gray-700">Permanente</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t">
        <Button 
          variant="outline" 
          className="ml-auto flex gap-2 items-center"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          Télécharger PDF
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CertificateCard;
