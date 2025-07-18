import React from 'react';
import Icon from '../../../components/AppIcon';

const StatusTimeline = ({ timeline, currentStatus }) => {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'submitted':
        return 'FileText';
      case 'under review':
        return 'Search';
      case 'investigation':
        return 'Eye';
      case 'resolved':
        return 'CheckCircle';
      case 'closed':
        return 'X';
      default:
        return 'Circle';
    }
  };

  const getStatusColor = (status, isActive, isCompleted) => {
    if (isActive) return 'text-blue-600 bg-blue-100';
    if (isCompleted) return 'text-green-600 bg-green-100';
    return 'text-gray-400 bg-gray-100';
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <Icon name="Clock" size={20} />
        Case Timeline
      </h3>

      <div className="relative">
        {timeline.map((item, index) => {
          const isActive = item.status.toLowerCase() === currentStatus.toLowerCase();
          const isCompleted = timeline.findIndex(t => t.status.toLowerCase() === currentStatus.toLowerCase()) > index;
          const isLast = index === timeline.length - 1;

          return (
            <div key={index} className="relative flex items-start pb-8">
              {/* Timeline Line */}
              {!isLast && (
                <div className={`absolute left-6 top-12 w-0.5 h-full ${
                  isCompleted ? 'bg-green-300' : 'bg-gray-200'
                }`} />
              )}

              {/* Status Icon */}
              <div className={`
                relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2
                ${isActive ? 'border-blue-500 bg-blue-100' : 
                  isCompleted ? 'border-green-500 bg-green-100': 'border-gray-300 bg-gray-100'}
              `}>
                <Icon 
                  name={getStatusIcon(item.status)} 
                  size={20} 
                  className={
                    isActive ? 'text-blue-600' : 
                    isCompleted ? 'text-green-600': 'text-gray-400'
                  }
                />
              </div>

              {/* Status Content */}
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={`text-sm font-semibold ${
                    isActive ? 'text-blue-900' : 
                    isCompleted ? 'text-green-900': 'text-gray-500'
                  }`}>
                    {item.status}
                  </h4>
                  {item.timestamp && (
                    <span className="text-xs text-gray-500">
                      {formatDateTime(item.timestamp)}
                    </span>
                  )}
                </div>
                
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                )}
                
                {item.officer && (
                  <p className="text-xs text-gray-500 mt-1">
                    By: {item.officer}
                  </p>
                )}

                {item.notes && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{item.notes}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusTimeline;