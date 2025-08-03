"use client";

import { useState } from "react";
import { transformDirectoryData, getDepartments, type Contact } from '@/lib/directoryUtils';
import directoryData from '@/data/directory.json';


type ViewState = 'categories' | 'departments' | 'contacts';

interface CategoryIconMap {
  [key: string]: {
    icon: string;
    color: string;
    description: string;
  }
}

const categoryIcons: CategoryIconMap = {
  "General & Revenue Administration": {
    icon: "🏛️",
    color: "bg-blue-100 text-blue-600",
    description: "District administration, revenue collection, and governance"
  },
  "Planning & Development": {
    icon: "📊",
    color: "bg-green-100 text-green-600",
    description: "Development planning, rural development, and project management"
  },
  "Health & Social Services": {
    icon: "🏥",
    color: "bg-red-100 text-red-600",
    description: "Healthcare services, medical administration, and social welfare"
  },
  "Agriculture & Allied Sectors": {
    icon: "🌾",
    color: "bg-amber-100 text-amber-600",
    description: "Agriculture, horticulture, animal husbandry, and rural economy"
  },
  "Education": {
    icon: "🎓",
    color: "bg-purple-100 text-purple-600",
    description: "School education, colleges, and educational administration"
  },
  "Infrastructure & Utilities": {
    icon: "🔧",
    color: "bg-gray-100 text-gray-600",
    description: "Water, electricity, irrigation, and public infrastructure"
  },
  "Commerce, Supplies & Cooperation": {
    icon: "🏪",
    color: "bg-orange-100 text-orange-600",
    description: "Trade, civil supplies, industries, and cooperative societies"
  },
  "Police & Security": {
    icon: "👮",
    color: "bg-indigo-100 text-indigo-600",
    description: "Law enforcement, security, and public safety"
  },
  "Forest & Environment": {
    icon: "🌳",
    color: "bg-emerald-100 text-emerald-600",
    description: "Forest conservation, wildlife protection, and environment"
  },
  "Municipal Administration (Ieeja Municipality)": {
    icon: "🏢",
    color: "bg-cyan-100 text-cyan-600",
    description: "Municipal services, town planning, and local governance"
  }
};

export default function Directory() {
  const [currentView, setCurrentView] = useState<ViewState>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState("");

  const categories = Object.keys(directoryData);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentView('departments');
  };

  const handleDepartmentClick = (department: string) => {
    setSelectedDepartment(department);
    setCurrentView('contacts');
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    setSelectedCategory('');
    setSelectedDepartment('');
  };

  const handleBackToDepartments = () => {
    setCurrentView('departments');
    setSelectedDepartment('');
  };

  const getCurrentContacts = () => {
    if (!selectedCategory || !selectedDepartment) return [];
    
    const categoryData = directoryData[selectedCategory as keyof typeof directoryData];
    const department = categoryData.departments.find(dept => dept.name === selectedDepartment);
    
    if (!department) return [];
    
    return department.officials
      .filter(official => official.name && official.name !== null)
      .filter(official => {
        if (!searchTerm) return true;
        return (
          official.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          official.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          official.phone?.includes(searchTerm)
        );
      })
      .map(official => ({
        name: official.name!,
        designation: official.designation,
        phone: official.phone || 'N/A',
        email: official.email || undefined,
        address: official.address || undefined,
        department: selectedCategory,
        subCategory: selectedDepartment,
        level: Array.isArray(official.level) ? official.level.join(', ') : official.level,
        description: official.description
      }));
  };

  const renderBreadcrumbs = () => {
    return (
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button
                onClick={handleBackToCategories}
                className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Categories
              </button>
            </li>
            {selectedCategory && (
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <button
                    onClick={handleBackToDepartments}
                    className="ml-1 text-sm font-medium text-yellow-600 hover:text-yellow-700 md:ml-2"
                  >
                    {selectedCategory}
                  </button>
                </div>
              </li>
            )}
            {selectedDepartment && (
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{selectedDepartment}</span>
                </div>
              </li>
            )}
          </ol>
        </nav>
      </div>
    );
  };

  const renderCategories = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
      {categories.map((category) => {
        const iconData = categoryIcons[category];
        return (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-yellow-200 hover:shadow-xl transition-all duration-200 cursor-pointer group hover:border-yellow-300"
          >
            <div className="text-center">
              <div className={`w-12 h-12 md:w-16 md:h-16 ${iconData?.color || 'bg-gray-100 text-gray-600'} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-xl md:text-2xl">{iconData?.icon || '📁'}</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{category}</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2">{iconData?.description || 'Administrative services'}</p>
              <div className="flex items-center justify-center text-yellow-600">
                <span className="text-sm font-medium">View Departments</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderDepartments = () => {
    if (!selectedCategory) return null;
    
    const categoryData = directoryData[selectedCategory as keyof typeof directoryData];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {categoryData.departments.map((department) => {
          const officialCount = department.officials.filter(o => o.name && o.name !== null).length;
          
          return (
            <div
              key={department.name}
              onClick={() => handleDepartmentClick(department.name)}
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-yellow-200 hover:shadow-xl transition-all duration-200 cursor-pointer group hover:border-yellow-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{department.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    {officialCount} {officialCount === 1 ? 'Official' : 'Officials'}
                  </p>
                  <div className="flex items-center text-yellow-600 group-hover:text-yellow-700">
                    <span className="text-sm font-medium">View Contacts</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-2 md:ml-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderContacts = () => {
    const contacts = getCurrentContacts();
    
    return (
      <>
        {/* Search Box */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-yellow-200 mb-8">
          <div className="max-w-md mx-auto">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Contacts
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by name, designation, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {contacts.length} contacts in {selectedDepartment}
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-yellow-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-3 md:space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{contact.name}</h3>
                      <p className="text-sm md:text-base text-yellow-600 font-medium mb-1">{contact.designation}</p>
                      {contact.level && (
                        <p className="text-blue-600 text-xs mb-2 font-medium">Level: {contact.level}</p>
                      )}
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${contact.phone}`} className="text-xs md:text-sm hover:text-yellow-600 transition-colors">
                            {contact.phone}
                          </a>
                        </div>
                        
                        {contact.email && (
                          <div className="flex items-center text-gray-600">
                            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href={`mailto:${contact.email}`} className="text-xs md:text-sm hover:text-yellow-600 transition-colors break-all">
                              {contact.email}
                            </a>
                          </div>
                        )}
                        
                        {contact.address && (
                          <div className="flex items-start text-gray-600">
                            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-xs md:text-sm">{contact.address}</span>
                          </div>
                        )}
                        
                        {contact.description && (
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <p className="text-xs text-gray-600 italic line-clamp-3">{contact.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {contacts.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No contacts found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/map-mini.svg" 
                alt="Ieeja Map" 
                className="w-8 h-8 mr-3"
              />
              <a href="/" className="text-2xl font-bold text-yellow-600">ieeja.com</a>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-yellow-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ieeja Municipality <span className="text-yellow-600">Directory</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentView === 'categories' && 'Choose a category to browse departments and contacts'}
            {currentView === 'departments' && `Departments in ${selectedCategory}`}
            {currentView === 'contacts' && `Contacts in ${selectedDepartment}`}
          </p>
        </div>

        {/* Breadcrumbs */}
        {currentView !== 'categories' && renderBreadcrumbs()}

        {/* Content based on current view */}
        {currentView === 'categories' && renderCategories()}
        {currentView === 'departments' && renderDepartments()}
        {currentView === 'contacts' && renderContacts()}


        {/* Back to Home */}
        <div className="text-center mt-12">
          <a href="/" className="inline-flex items-center px-6 py-3 border border-yellow-600 text-yellow-600 font-medium rounded-lg hover:bg-yellow-50 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}