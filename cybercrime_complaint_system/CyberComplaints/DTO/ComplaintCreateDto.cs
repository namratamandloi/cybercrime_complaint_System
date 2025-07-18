using CyberComplaints.Models;

namespace CyberComplaints.DTO
{
    public class ComplaintCreateDto
    {
        public DateTime DateOfIncident { get; set; }
        public TimeSpan? TimeOfIncident { get; set; }
        public string Description { get; set; }
        public ComplaintStatus Status { get; set; }
        public string Location { get; set; } // City name
        public int UserId { get; set; }
    }
}
