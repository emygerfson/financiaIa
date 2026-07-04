import React from 'react';

// import type { ButtonHTMLAttributes } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' |'icon';
  icon?: LucideIcon;
}

const baseclasses = 'flex cursor-pointer items-center justify-center font-midium text-sm gap-2 px-4 py-3 transition-opacity houver:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed';

const variantClasses: Record<NonNullable<ButtomProps['variant']>, string> = {
  primary: 'bg-blue-500 text-white rounded-md',
  secondary: 'bg-gray-200 text-gray-800 rounded-md',
  ghost: 'bg-transparent text-gray-800',
  icon: 'bg-transparent text-gray-800 p-2 rounded-full',
};
export function Buttom({ variant = 'primary', icon: Icon, className, ...props }: ButtomProps) {
  return (
    <button {...props} className={`${baseclasses} ${variantClasses[variant]} ${className}`}>
      {Icon && <Icon size={20}/>}
      {props.children}
    </button>
  );
}