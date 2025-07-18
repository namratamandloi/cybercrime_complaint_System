import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import IncidentTypeSelector from './components/IncidentTypeSelector';
import IncidentDetailsForm from './components/IncidentDetailsForm';
import FormNavigation from './components/FormNavigation';
import ContextualHelp from './components/ContextualHelp';
import SuccessModal from './components/SuccessModal';
import axios from 'axios';

const CybercrimeReportingForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [complaintId, setComplaintId] = useState('');

  const steps = [
    { title: 'Incident Type', description: 'Select the type of cybercrime' },
    { title: 'Incident Details', description: 'Provide detailed information' },
  ];

  const totalSteps = 2;

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('cybercrime-form-draft');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setCurrentStep(parsed.currentStep || 1);
        setSelectedType(parsed.selectedType || '');
        setFormData(parsed.formData || {});
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  const saveFormData = () => {
    const dataToSave = {
      currentStep,
      selectedType,
      formData,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem('cybercrime-form-draft', JSON.stringify(dataToSave));
  };

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(saveFormData, 30000);
    return () => clearInterval(interval);
  }, [currentStep, selectedType, formData]);

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!selectedType) {
          newErrors.incidentType = 'Please select an incident type';
        }
        break;

      case 2:
        if (!formData.incidentDate) {
          newErrors.incidentDate = 'Incident date is required';
        }
        if (!formData.location) {
          newErrors.location = 'Location is required';
        }
        if (!formData.contactNumber) {
          newErrors.contactNumber = 'Contact number is required';
        }
        if (!formData.email) {
          newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.fullName) {
          newErrors.fullName = 'Full name is required';
        }
        if (!formData.description) {
          newErrors.description = 'Incident description is required';
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      saveFormData();
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSave = () => {
    saveFormData();
    // You could show a toast notification here
    alert('Form saved successfully!');
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      // Get user info from localStorage (or your auth context)
      const user = JSON.parse(localStorage.getItem('user'));
      // Prepare the payload
      const payload = {
        dateOfIncident: formData.dateOfIncident,
        timeOfIncident: formData.timeOfIncident,
        description: formData.description,
        status: "Submitted",
        location: formData.location,
        userId: user.id
      };
      // Make the POST request
      const response = await axios.post('http://localhost:5031/api/Complaints', payload);
      setComplaintId(response.data.id);
      // Save incident type in localStorage for quick lookup by complaint ID
      if (response.data.id && selectedType) {
        localStorage.setItem(`complaint_incidentType_${response.data.id}`, selectedType);
      }
      // Clear saved draft
      localStorage.removeItem('cybercrime-form-draft');
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Error submitting complaint. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    navigate('/complaint-status-dashboard');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedType !== '';
      case 2:
        return formData.incidentDate && formData.location && formData.contactNumber && 
               formData.email && formData.fullName && formData.description;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 flex-wrap">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Cybercrime Reporting</h1>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Home" size={16} />
                <span>/</span>
                <span>Report</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <Button
                variant="outline"
                iconName="LogOut"
                onClick={() => {
                  localStorage.clear();
                  navigate('/user-registration-login');
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              {currentStep === 1 && (
                <IncidentTypeSelector
                  selectedType={selectedType}
                  onTypeSelect={setSelectedType}
                />
              )}

              {currentStep === 2 && (
                <IncidentDetailsForm
                  formData={formData}
                  onFormDataChange={setFormData}
                  errors={errors}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Form Navigation */}
      <FormNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSave={handleSave}
        onSubmit={handleSubmit}
        isValid={isStepValid()}
        isSubmitting={isSubmitting}
        formData={formData}
      />

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        complaintId={complaintId}
      />
    </div>
  );
};

export default CybercrimeReportingForm;