using CyberComplaints.Data;
using CyberComplaints.DTO;
using CyberComplaints.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CyberComplaints.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComplaintsController : Controller
    {
        private readonly AppDbContext _context;

        public ComplaintsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Complaints
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ComplaintDto>>> GetComplaints([FromQuery] int? userId)
        {
            var complaints = await _context.Complaints
                .Include(c => c.Location)
                .Include(c => c.User)
                .Where(c => !userId.HasValue || c.UserId == userId.Value)
                .Select(c => new ComplaintDto
                {
                    Id = c.Id,
                    DateOfIncident = c.DateOfIncident,
                    Description = c.Description,
                    Status = c.Status.ToString(),
                    Location = c.Location.City,
                    UserFullName = c.User.FullName,
                    UserPhone = c.User.Phone
                })
                .ToListAsync();

            return complaints;
        }

        // GET: api/Complaints/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Complaint>> GetComplaint(int id)
        {
            var complaint = await _context.Complaints
                .Include(c => c.Location)
                .Include(c => c.User)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (complaint == null)
            {
                return NotFound();
            }

            return complaint;
        }

        // POST: api/Complaints
        [HttpPost]
        public async Task<ActionResult<Complaint>> PostComplaint([FromBody] ComplaintCreateDto dto)
        {
            // 1. Check if location exists
            var location = await _context.Locations.FirstOrDefaultAsync(l => l.City == dto.Location);

            // 2. If not, create it
            if (location == null)
            {
                location = new Location { City = dto.Location };
                _context.Locations.Add(location);
                await _context.SaveChangesAsync();
            }

            // 3. Create the complaint
            var complaint = new Complaint
            {
                DateOfIncident = dto.DateOfIncident,
                TimeOfIncident = dto.TimeOfIncident,
                Description = dto.Description,
                Status = dto.Status,
                LocationId = location.Id,
                UserId = dto.UserId
            };

            _context.Complaints.Add(complaint);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetComplaint), new { id = complaint.Id }, complaint);
        }

        // PUT: api/Complaints/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComplaint(int id, [FromBody] Complaint complaint)
        {
            if (id != complaint.Id)
            {
                return BadRequest();
            }

            _context.Entry(complaint).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComplaintExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Complaints/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComplaint(int id)
        {
            var complaint = await _context.Complaints.FindAsync(id);
            if (complaint == null)
            {
                return NotFound();
            }

            _context.Complaints.Remove(complaint);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComplaintExists(int id)
        {
            return _context.Complaints.Any(e => e.Id == id);
        }
    }
}
