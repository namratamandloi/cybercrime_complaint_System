using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace CyberComplaints.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        [MaxLength(50)]
        public string FullName {  get; set; }
        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        [Required]
        [MaxLength(10)]
        public string Phone { get; set; }
        [Required]
        [MaxLength(60)]
        //[JsonIgnore]
        public string Password { get; set; }
        [Required]
        [MaxLength(20)]
        public string Role { get; set; } = "USER";


    }
}
