import { CodeBlock } from './CodeBlock';
import { InfoCard } from './InfoCard';
import type { Section } from '../types';

interface ContentSectionProps {
  section: Section;
}

export function ContentSection({ section }: ContentSectionProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{section.icon}</span>
          <h2 className="text-3xl font-bold">{section.title}</h2>
        </div>
        <p className="text-lg text-gray-400">{section.subtitle}</p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {section.content.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-400">{item.heading}</h3>
            
            {item.description && (
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            )}

            {item.points && (
              <ul className="space-y-2 ml-6">
                {item.points.map((point, i) => (
                  <li key={i} className="text-gray-300 list-disc">{point}</li>
                ))}
              </ul>
            )}

            {item.info && <InfoCard {...item.info} />}

            {item.code && <CodeBlock code={item.code} language={item.language || 'jsx'} />}

            {item.subsections && (
              <div className="space-y-6 ml-4 border-l-2 border-gray-800 pl-6">
                {item.subsections.map((sub, subIndex) => (
                  <div key={subIndex} className="space-y-3">
                    <h4 className="text-xl font-semibold text-cyan-400">{sub.heading}</h4>
                    {sub.description && (
                      <p className="text-gray-300 leading-relaxed">{sub.description}</p>
                    )}
                    {sub.points && (
                      <ul className="space-y-2 ml-6">
                        {sub.points.map((point, i) => (
                          <li key={i} className="text-gray-300 list-disc">{point}</li>
                        ))}
                      </ul>
                    )}
                    {sub.code && <CodeBlock code={sub.code} language={sub.language || 'jsx'} />}
                    {sub.info && <InfoCard {...sub.info} />}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
