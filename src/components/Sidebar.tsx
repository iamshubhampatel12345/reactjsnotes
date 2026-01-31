import { ChevronRight } from 'lucide-react';
import type { Section } from '../types';

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  isOpen: boolean;
}

export function Sidebar({ sections, activeSection, onSectionChange, isOpen }: SidebarProps) {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => onSectionChange(activeSection)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto z-30 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <nav className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{section.icon}</span>
                <div>
                  <div className="font-medium text-sm">{section.title}</div>
                  <div className={`text-xs ${activeSection === section.id ? 'text-blue-100' : 'text-gray-500'}`}>
                    {section.subtitle}
                  </div>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === section.id ? 'translate-x-1' : ''}`} />
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
