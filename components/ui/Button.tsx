import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/lib/site-data';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'call' | 'whatsapp' | 'primary' | 'secondary' | 'outline' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'phone' | 'whatsapp' | 'arrow' | 'none';
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'none',
  children,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-7 py-4 text-lg gap-3',
  };

  const variantStyles = {
    call: 'bg-[#1666D9] text-white hover:bg-[#1253B3] hover:shadow-lg hover:shadow-[#1666D9]/30 focus:ring-[#1666D9]',
    whatsapp: 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 focus:ring-emerald-500',
    primary: 'bg-[#1666D9] text-white hover:bg-[#1253B3] hover:shadow-lg hover:shadow-[#1666D9]/30 focus:ring-[#1666D9]',
    secondary: 'bg-[#0E2238] text-white hover:bg-[#162F4C] hover:shadow-md focus:ring-[#0E2238]',
    outline: 'bg-transparent text-[#0E2238] border-2 border-[#0E2238] hover:bg-[#0E2238] hover:text-white focus:ring-[#0E2238]',
    amber: 'bg-[#F47A20] text-white hover:bg-[#D96511] hover:shadow-lg hover:shadow-[#F47A20]/30 focus:ring-[#F47A20]',
  };

  const IconComponent = () => {
    if (icon === 'phone' || variant === 'call') {
      return <Phone className="w-5 h-5 shrink-0 animate-pulse text-white" />;
    }
    if (icon === 'whatsapp' || variant === 'whatsapp') {
      return <MessageSquare className="w-5 h-5 shrink-0 fill-current" />;
    }
    if (icon === 'arrow') {
      return <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />;
    }
    return null;
  };

  const defaultText = variant === 'call' ? `Call Darren` : variant === 'whatsapp' ? `WhatsApp Darren` : children;

  const content = (
    <>
      <IconComponent />
      <span>{defaultText}</span>
    </>
  );

  const defaultHref = variant === 'call' ? BUSINESS_DETAILS.phoneHref : variant === 'whatsapp' ? BUSINESS_DETAILS.whatsappHref : href;

  if (defaultHref) {
    return (
      <a
        href={defaultHref}
        target={variant === 'whatsapp' ? '_blank' : undefined}
        rel={variant === 'whatsapp' ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} group`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} group`}
      {...props}
    >
      {content}
    </button>
  );
};
