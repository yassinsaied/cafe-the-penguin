import type { ReactNode } from 'react';

interface InfoItemProps {
  icon: ReactNode;
  title: string;
  sub: ReactNode;
  bordered?: boolean;
}

export default function InfoItem({ icon, title, sub, bordered = false }: InfoItemProps) {
  return (
    <div
      className={`flex items-center gap-5 px-10 py-7 ${bordered ? 'border-r border-gold/15' : ''}`}
    >
      {/* Icon circle */}
      <div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] rounded-full border-2 border-gold bg-gold/5">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="font-heading font-medium text-[15px] tracking-[0.08em] text-white mb-1">
          {title}
        </p>
        <p className="font-body font-light text-xs text-muted leading-[1.6]">{sub}</p>
      </div>
    </div>
  );
}
