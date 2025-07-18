import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ComplaintCard from '../complaint-status-dashboard/components/ComplaintCard';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

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

  const handleDeleteComplaint = async (complaintId) => {
    if (!window.confirm('Are you sure you want to delete this complaint?')) return;
    try {
      await axios.delete(`http://localhost:5031/api/Complaints/${complaintId}`);
      setComplaints(prev => prev.filter(c => c.id !== complaintId));
    } catch (error) {
      console.error('Error deleting complaint:', error);
      alert('Failed to delete complaint');
    }
  };

  const handleStatusChange = async (complaintId, newStatus) => {
    try {
      // Fetch the full complaint object (needed for PUT)
      const complaint = complaints.find(c => c.id === complaintId);
      const updatedComplaint = { ...complaint, status: newStatus };
      await axios.put(`http://localhost:5031/api/Complaints/${complaintId}`, updatedComplaint);
      setComplaints(prev =>
        prev.map(c => c.id === complaintId ? { ...c, status: newStatus } : c)
      );
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 flex-wrap">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Home" size={16} />
                <span>/</span>
                <span>Admin</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center gap-6 border border-gray-200">
          <Icon name="User" size={48} className="text-blue-500" />
          <div>
            <div className="text-lg font-semibold text-gray-900">{JSON.parse(localStorage.getItem('user'))?.name || 'Admin'}</div>
            <div className="text-gray-600">{JSON.parse(localStorage.getItem('user'))?.email || ''}</div>
          </div>
        </div>
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Icon name="Filter" size={20} />
              Filters
            </h3>
            <Button
              variant="text"
              size="sm"
              className="text-red-600 hover:text-red-700"
              // onClick={onClearFilters} // Add logic if needed
            >
              Clear All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Location
              </label>
              <input
                type="text"
                placeholder="Enter location..."
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                // value={locationSearch}
                // onChange={e => setLocationSearch(e.target.value)}
              />
            </div>
            {/* Complaint Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Complaint Type
              </label>
              <select
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                // value={complaintType}
                // onChange={e => setComplaintType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="identity theft">Identity Theft</option>
                <option value="online fraud">Online Fraud</option>
                <option value="cyberbullying">Cyberbullying</option>
                <option value="phishing">Phishing</option>
                <option value="ransomware">Ransomware</option>
                <option value="data breach">Data Breach</option>
              </select>
            </div>
          </div>
        </div>
        {/* Complaints List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              All Complaints ({complaints.length})
            </h2>
          </div>
          {complaints.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center border border-gray-200">
              <Icon name="FileText" size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
              <p className="text-gray-600 mb-6">
                No complaints have been filed yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complaints.map((complaint) => (
                <ComplaintCard
                  key={complaint.id}
                  complaint={complaint}
                  onDelete={() => handleDeleteComplaint(complaint.id)}
                  onStatusChange={(newStatus) => handleStatusChange(complaint.id, newStatus)}
                  isAdmin
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
