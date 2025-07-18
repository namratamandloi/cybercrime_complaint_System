import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const StatusFilter = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle 
}) => {

  const incidentTypes = [
    { value: '', label: 'All Types' },
    { value: 'identity theft', label: 'Identity Theft' },
    { value: 'online fraud', label: 'Online Fraud' },
    { value: 'cyberbullying', label: 'Cyberbullying' },
    { value: 'phishing', label: 'Phishing' },
    { value: 'ransomware', label: 'Ransomware' },
    { value: 'data breach', label: 'Data Breach' }
  ];

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          fullWidth
        >
          Filters {Object.values(filters).some(v => v) && '(Active)'}
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200
      `}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Icon name="Filter" size={20} />
            Filters
          </h3>
          <Button
            variant="text"
            size="sm"
            onClick={onClearFilters}
            className="text-red-600 hover:text-red-700"
          >
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Location
            </label>
            <Input
              type="text"
              placeholder="Enter location..."
              value={filters.search}
              onChange={(e) => onFilterChange('search', e.target.value)}
            />
          </div>
          {/* Incident Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Complaint Type
            </label>
            <select
              value={filters.incidentType}
              onChange={(e) => onFilterChange('incidentType', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {incidentTypes.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusFilter;