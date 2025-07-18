import React from 'react';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const IncidentDetailsForm = ({ formData, onFormDataChange, errors }) => {
  const handleInputChange = (field, value) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Incident Details
        </h3>
        <p className="text-gray-600">
          Please provide detailed information about the incident
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Incident *
            </label>
            <Input
              type="date"
              value={formData.incidentDate || ''}
              onChange={(e) => handleInputChange('incidentDate', e.target.value)}
              className={errors.incidentDate ? 'border-red-500' : ''}
              required
            />
            {errors.incidentDate && (
              <p className="text-red-500 text-sm mt-1">{errors.incidentDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time of Incident (if known)
            </label>
            <Input
              type="time"
              value={formData.incidentTime || ''}
              onChange={(e) => handleInputChange('incidentTime', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location/City *
            </label>
            <Input
              type="text"
              placeholder="Enter city or location"
              value={formData.location || ''}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className={errors.location ? 'border-red-500' : ''}
              required
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Contact Number *
            </label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.contactNumber || ''}
              onChange={(e) => handleInputChange('contactNumber', e.target.value)}
              className={errors.contactNumber ? 'border-red-500' : ''}
              required
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Email Address *
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName || ''}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={errors.fullName ? 'border-red-500' : ''}
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Detailed Description of Incident *
        </label>
        <textarea
          rows={6}
          placeholder="Please provide a detailed description of what happened, including any relevant URLs, usernames, or other information that might help with the investigation."
          value={formData.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className={`w-full px-3 py-2 bg-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="#3B82F6" />
          <div>
            <h4 className="font-medium text-blue-800 mb-1">Important Information</h4>
            <p className="text-blue-700 text-sm">
              All information provided will be kept confidential and used only for investigation purposes. 
              Please ensure all details are accurate as they will be used to process your complaint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetailsForm;