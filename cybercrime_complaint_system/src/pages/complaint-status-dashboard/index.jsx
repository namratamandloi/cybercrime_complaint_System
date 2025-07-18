import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ComplaintCard from './components/ComplaintCard';
import StatusFilter from './components/StatusFilter';
import axios from 'axios';

import StatusTimeline from './components/StatusTimeline';


const ComplaintStatusDashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  // 'cards' or 'table'
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    incidentType: '',
    priority: '',
    fromDate: '',
    toDate: ''
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:5031/api/Complaints');
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = complaints;

    if (filters.search) {
      filtered = filtered.filter(complaint =>
        complaint.UserFullName.toLowerCase().includes(filters.search.toLowerCase()) ||
        complaint.UserPhone.includes(filters.search) ||
        complaint.Location.toLowerCase().includes(filters.search.toLowerCase()) ||
        complaint.incidentType.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter(complaint =>
        complaint.status.toLowerCase() === filters.status.toLowerCase()
      );
    }

    if (filters.incidentType) {
      filtered = filtered.filter(complaint =>
        complaint.incidentType.toLowerCase().includes(filters.incidentType.toLowerCase())
      );
    }

    if (filters.priority) {
      filtered = filtered.filter(complaint =>
        complaint.priority.toLowerCase() === filters.priority.toLowerCase()
      );
    }

    if (filters.fromDate) {
      filtered = filtered.filter(complaint =>
        new Date(complaint.submissionDate) >= new Date(filters.fromDate)
      );
    }

    if (filters.toDate) {
      filtered = filtered.filter(complaint =>
        new Date(complaint.submissionDate) <= new Date(filters.toDate)
      );
    }

    setFilteredComplaints(filtered);
  }, [filters, complaints]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      status: '',
      incidentType: '',
      priority: '',
      fromDate: '',
      toDate: ''
    });
  };

  const handleViewDetails = (complaint) => {
    setSelectedComplaint(complaint);
    setShowTimeline(true);
  };

  const handleSendMessage = (complaint) => {
    alert(`Opening message interface for case ${complaint.fullName}`);
  };

  const handleUploadDocument = (complaint) => {
    alert(`Opening document upload for case ${complaint.fullName}`);
  };

  const handleEditComplaint = (complaint) => {
    alert(`Edit complaint: ${complaint.fullName}`);
  };

  const handleDeleteComplaint = (complaint) => {
    if (window.confirm(`Are you sure you want to delete complaint ${complaint.fullName}?`)) {
      setComplaints(prev => prev.filter(c => c.id !== complaint.id));
      setFilteredComplaints(prev => prev.filter(c => c.id !== complaint.id));
    }
  };

  // const handleMarkAsRead = (notificationId) => {
  //   setNotifications(prev =>
  //     prev.map(notification =>
  //       notification.id === notificationId
  //         ? { ...notification, read: true }
  //         : notification
  //     )
  //   );
  // };

  // const handleMarkAllAsRead = () => {
  //   setNotifications(prev =>
  //     prev.map(notification => ({ ...notification, read: true }))
  //   );
  // };

  // const handleContactSupport = () => {
  //   alert("Opening support contact form...");
  // };

  // const calculateStats = () => {
  //   const total = complaints.length;
  //   const pending = complaints.filter(c => c.status === 'Under Review' || c.status === 'Submitted').length;
  //   const resolved = complaints.filter(c => c.status === 'Resolved').length;
  //   const closed = complaints.filter(c => c.status === 'Closed').length;

  //   return { total, pending, resolved, closed };
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Home" size={16} />
                <span>/</span>
                <span>Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                iconName="Plus"
                iconPosition="left"
                onClick={() => navigate('/cybercrime-reporting-form')}
              >
                New Complaint
              </Button>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center gap-6 border border-gray-200">
          <Icon name="User" size={48} className="text-blue-500" />
          <div>
            <div className="text-lg font-semibold text-gray-900">{JSON.parse(localStorage.getItem('user'))?.name || 'User'}</div>
            <div className="text-gray-600">{JSON.parse(localStorage.getItem('user'))?.email || ''}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-4">
            {/* Complaints List */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Your Complaints ({filteredComplaints.length})
                </h2>
              </div>

              {filteredComplaints.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center border border-gray-200">
                  <Icon name="FileText" size={48} className="mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
                  <p className="text-gray-600 mb-6">
                    {Object.values(filters).some(v => v) 
                      ? "Try adjusting your filters to see more results." :"You haven't filed any complaints yet. Start by reporting an incident."
                    }
                  </p>
                  <Button
                    variant="primary"
                    iconName="Plus"
                    iconPosition="left"
                    onClick={() => navigate('/cybercrime-reporting-form')}
                  >
                    File Your First Complaint
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredComplaints.map((complaint) => (
                    <ComplaintCard
                      key={complaint.id}
                      complaint={complaint}
                      onViewDetails={handleViewDetails}
                      onSendMessage={handleSendMessage}
                      onUploadDocument={handleUploadDocument}
                      onEdit={handleEditComplaint}
                      onDelete={handleDeleteComplaint}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Timeline Modal */}
            {showTimeline && selectedComplaint && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Case Timeline - {selectedComplaint.fullName}
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="X"
                        onClick={() => setShowTimeline(false)}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <StatusTimeline
                      timeline={selectedComplaint.timeline}
                      currentStatus={selectedComplaint.status}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <Button
          variant="primary"
          size="lg"
          shape="circle"
          iconName="Plus"
          onClick={() => navigate('/cybercrime-reporting-form')}
          className="shadow-lg"
        />
      </div>
    </div>
  );
};

export default ComplaintStatusDashboard;