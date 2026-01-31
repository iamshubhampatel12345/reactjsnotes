import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentSection } from './components/ContentSection';
import { reactSections } from './data/reactSections';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-40">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              React.js Complete Guide
            </h1>
          </div>
          <div className="hidden sm:block text-sm text-gray-400">
            From Beginner to Advanced
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar
          sections={reactSections}
          activeSection={activeSection}
          onSectionChange={(section) => {
            setActiveSection(section);
            setIsSidebarOpen(false);
          }}
          isOpen={isSidebarOpen}
        />

        {/* Content Area */}
        <main className="flex-1 lg:ml-80">
          <ContentSection section={reactSections.find(s => s.id === activeSection)!} />
        </main>
      </div>
    </div>
  );
}
