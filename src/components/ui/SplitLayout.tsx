import React from 'react';

interface SplitLayoutProps {
  imagePosition?: 'left' | 'right';
  content: React.ReactNode;
  image: React.ReactNode;
  className?: string;
}

export function SplitLayout({ imagePosition = 'right', content, image, className = '' }: SplitLayoutProps) {
  const isLeft = imagePosition === 'left';

  return (
    <div className={`flex flex-col ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 ${className}`}>
      <div className="w-full lg:w-1/2">
        {content}
      </div>
      <div className="w-full lg:w-1/2">
        {image}
      </div>
    </div>
  );
}

