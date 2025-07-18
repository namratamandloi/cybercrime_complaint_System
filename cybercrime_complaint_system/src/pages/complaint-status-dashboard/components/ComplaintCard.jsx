import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

// Map incident type keys to user-friendly labels
const INCIDENT_TYPE_LABELS = {
  'identity_theft': 'Identity Theft',
  'financial_fraud': 'Financial Fraud',
  'online_harassment': 'Online Harassment',
  'phishing_scam': 'Phishing/Scam',
  'data_breach': 'Data Breach',
  'ransomware': 'Ransomware/Malware',
  'social_media': 'Social Media Crime',
  'other': 'Other',
};

const ComplaintCard = ({ complaint, onEdit, onDelete, onStatusChange, isAdmin }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Only allow user to delete if status is 'Submitted'
  const canUserDelete = complaint.status && complaint.status.toLowerCase() === 'submitted';

  // Get incident type from complaint or localStorage
  let incidentType = complaint.incidentType;
  if (!incidentType && complaint.id) {
    const storedType = localStorage.getItem(`complaint_incidentType_${complaint.id}`);
    if (storedType) {
      incidentType = INCIDENT_TYPE_LABELS[storedType] || storedType;
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{incidentType || 'No Title'}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
              {complaint.status}
            </span>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <span className="text-sm text-gray-900 font-medium">Name: {complaint.userFullName}</span>
            <span className="text-sm text-gray-700">Number: {complaint.userPhone}</span>
            <span className="text-sm text-gray-700">Location: {complaint.location}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={16} />
              <span>
                Filed: {complaint.dateOfIncident ? formatDate(complaint.dateOfIncident) : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 text-sm line-clamp-2">{complaint.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {isAdmin && (
          <>
            <select
              value={complaint.status}
              onChange={e => onStatusChange(e.target.value)}
              className="border rounded px-2 py-1 text-sm mr-2"
            >
              <option value="Submitted">Submitted</option>
              <option value="UnderReview">UnderReview</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
            <Button
              variant="primary"
              size="sm"
              iconName="Trash"
              iconPosition="left"
              onClick={onDelete}
            >
              Delete
            </Button>
          </>
        )}
        {!isAdmin && (
          <>
            <Button
              variant="outline"
              size="sm"
              iconName="Pencil"
              iconPosition="left"
              onClick={() => onEdit && onEdit(complaint)}
            >
              Edit
            </Button>
            <Button
              variant="primary"
              size="sm"
              iconName="Trash"
              iconPosition="left"
              onClick={onDelete}
              disabled={!canUserDelete}
              title={canUserDelete ? '' : 'You can only delete complaints with status Submitted'}
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ComplaintCard;