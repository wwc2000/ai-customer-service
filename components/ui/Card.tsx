import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className="p-6 border-b border-gray-200">{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
}

export const CardTitle = ({ children }: CardTitleProps) => {
  return <h2 className="text-2xl font-bold text-gray-900">{children}</h2>;
};

interface CardContentProps {
  children: React.ReactNode;
}

export const CardContent = ({ children }: CardContentProps) => {
  return <div className="p-6">{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <div className="p-6 bg-gray-50 rounded-b-xl">{children}</div>;
};