import React from 'react';

declare global {
  interface ComponentProps {
    className?: string;
    children?: React.ReactNode;
  }
}
