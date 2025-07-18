using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace CyberComplaints.Models
{
    public class Complaint
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime DateOfIncident { get; set; }

        public TimeSpan? TimeOfIncident { get; set; } // optional

        [Required]
        public string Description { get; set; }

        public ComplaintStatus Status { get; set; } = ComplaintStatus.Submitted;

        public DateTime Timestamp { get; set; } = DateTime.UtcNow;

        // Foreign key to Location
        
        [ForeignKey("Location")]
        public int LocationId { get; set; }
        [JsonIgnore]
        public virtual Location? Location { get; set; }


        // Foreign key to User
        
        [ForeignKey("User")]
        public int UserId { get; set; }
        [JsonIgnore]
        public virtual User? User { get; set; }
    }
}
