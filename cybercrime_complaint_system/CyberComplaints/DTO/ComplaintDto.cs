namespace CyberComplaints.DTO
{
    public class ComplaintDto
    {
        public int Id { get; set; }
        public DateTime DateOfIncident { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string Location { get; set; }
        public string UserFullName { get; set; }
        public string UserPhone { get; set; }
    }
}
