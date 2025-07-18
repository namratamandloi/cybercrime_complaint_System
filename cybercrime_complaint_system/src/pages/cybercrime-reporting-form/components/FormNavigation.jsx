import React from 'react';
import Button from '../../../components/ui/Button';


const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  onSave, 
  onSubmit, 
  isValid,
  isSubmitting,
  formData
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {!isFirstStep && (
              <Button
                variant="outline"
                onClick={onPrevious}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
            )}
            
            <Button
              variant="ghost"
              onClick={onSave}
              iconName="Save"
              iconPosition="left"
              className="text-gray-600"
            >
              Save Draft
            </Button>
          </div>

          <div className="flex items-center space-x-3">
            {!isLastStep ? (
              <Button
                variant="primary"
                onClick={onNext}
                disabled={!isValid}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next Step
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={onSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Your progress is automatically saved. You can return to complete this form later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormNavigation;