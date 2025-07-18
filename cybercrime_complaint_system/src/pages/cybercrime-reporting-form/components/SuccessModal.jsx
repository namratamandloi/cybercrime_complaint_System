import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessModal = ({ isOpen, onClose, complaintId }) => {
  if (!isOpen) return null;

  const handleCopyComplaintId = () => {
    navigator.clipboard.writeText(complaintId);
    // You could add a toast notification here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-scale-in">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={32} color="#10B981" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Complaint Submitted Successfully!
            </h3>
            <p className="text-gray-600">
              Your cybercrime complaint has been received and will be reviewed by our team.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-medium text-blue-800 mb-2">Your Complaint ID:</p>
            <div className="flex items-center justify-between bg-white border border-blue-300 rounded px-3 py-2">
              <span className="font-mono text-blue-800 font-semibold">{complaintId}</span>
              <button
                onClick={handleCopyComplaintId}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <Icon name="Copy" size={16} />
              </button>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              Save this ID to track your complaint status
            </p>
          </div>

          <div className="space-y-3 text-left">
            <h4 className="font-medium text-gray-800">What happens next?</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <Icon name="Clock" size={14} className="mt-0.5 flex-shrink-0" />
                <p>Your complaint will be reviewed within 24-48 hours</p>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Mail" size={14} className="mt-0.5 flex-shrink-0" />
                <p>You'll receive email updates on the investigation progress</p>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="Phone" size={14} className="mt-0.5 flex-shrink-0" />
                <p>Our team may contact you for additional information</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="primary"
              onClick={() => window.location.href = '/complaint-status-dashboard'}
              className="flex-1"
              iconName="Search"
              iconPosition="left"
            >
              Track Complaint
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;