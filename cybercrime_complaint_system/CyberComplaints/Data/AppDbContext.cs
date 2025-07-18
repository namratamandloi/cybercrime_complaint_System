using CyberComplaints.Models;
using Microsoft.EntityFrameworkCore;

namespace CyberComplaints.Data
{
    public class AppDbContext : DbContext

   {
       public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Complaint> Complaints { get; set; }
        public DbSet<Location> Locations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {

            modelBuilder.Entity<User>()

                .Property(u => u.Role)

                .HasDefaultValue("USER");



            // Add more Fluent API configurations here if needed

        }

    }

}
