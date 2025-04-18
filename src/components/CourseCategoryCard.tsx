
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  courseCount: number;
}

const CourseCategoryCard = ({
  id,
  name,
  description,
  icon,
  courseCount,
}: CourseCategoryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
          <Icon name={icon} className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{courseCount} cours</span>
          <Link to={`/category/${id}`}>
            <Button variant="outline" className="text-primary hover:bg-primary hover:text-white">
              Voir les cours
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCategoryCard;
