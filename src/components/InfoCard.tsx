import { AlertCircle, Lightbulb, BookOpen, Zap } from 'lucide-react';

interface InfoCardProps {
  type: 'note' | 'tip' | 'important' | 'warning';
  title?: string;
  content: string;
}

export function InfoCard({ type, title, content }: InfoCardProps) {
  const config = {
    note: {
      icon: BookOpen,
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-700/50',
      iconColor: 'text-blue-400',
      titleColor: 'text-blue-300'
    },
    tip: {
      icon: Lightbulb,
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-700/50',
      iconColor: 'text-green-400',
      titleColor: 'text-green-300'
    },
    important: {
      icon: Zap,
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-700/50',
      iconColor: 'text-purple-400',
      titleColor: 'text-purple-300'
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-orange-900/20',
      borderColor: 'border-orange-700/50',
      iconColor: 'text-orange-400',
      titleColor: 'text-orange-300'
    }
  };

  const { icon: Icon, bgColor, borderColor, iconColor, titleColor } = config[type];

  return (
    <div className={`${bgColor} ${borderColor} border rounded-lg p-4`}>
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
        <div className="space-y-1">
          {title && <div className={`font-semibold ${titleColor}`}>{title}</div>}
          <div className="text-gray-300 text-sm leading-relaxed">{content}</div>
        </div>
      </div>
    </div>
  );
}
