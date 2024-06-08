import React, { ReactNode } from 'react';
import { Card, CardContent } from '../ui/card';

interface CardWrapperProps {
  children: ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
