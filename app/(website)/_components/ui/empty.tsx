import React from 'react';

interface EmptyMessageProps {
  title: string;
  message?: string; // Optional message prop
  children?: React.ReactNode; // To allow rendering any custom content in the component
}

const EmptyMessage: React.FC<EmptyMessageProps> = ({ title, message, children }) => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:pl-8 flex justify-center items-center bg-neutral-100">
      <div className="text-center items-center flex h-full flex-col">
        <p className="mt-2 text-2xl font-semibold text-gray-600">{title}</p>
        {message && <p className="mt-2 text-lg text-gray-500">{message}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default EmptyMessage;
