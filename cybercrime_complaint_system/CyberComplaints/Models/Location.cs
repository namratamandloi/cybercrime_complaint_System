using System.ComponentModel.DataAnnotations;

namespace CyberComplaints.Models
{
    public class Location
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string City { get; set; }

        // Navigation: one city can have many complaints
        public ICollection<Complaint> Complaints { get; set; }
    }
}
