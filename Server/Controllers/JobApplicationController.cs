using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("api/jobs")]
public class JobApplicationController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public JobApplicationController(ApplicationDbContext context)
    {
        _context = context;
    }
    

    [HttpGet]
    public async Task<ActionResult<IEnumerable<JobApplications>>> GetJobs()
    {
        return await _context.JobApplications.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<JobApplications>> GetJob(int id)
    {
        var job = await _context.JobApplications.FindAsync(id);
        if (job == null)
        {
            return NotFound();
        }
        return job;
    }

    [HttpPost]
    public async Task<ActionResult<JobApplications>> AddJob([FromBody] JobApplications job)
    {
    _context.JobApplications.Add(job);
    await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(GetJob), new { id = job.Id }, job);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateJob(int id, JobApplications job)
    {
        if (id != job.Id)
        {
            return BadRequest();
        }
        _context.Entry(job).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteJob(int id)
    {
        var job = await _context.JobApplications.FindAsync(id);
        if (job == null)
        {
            return NotFound();
        }
        _context.JobApplications.Remove(job);
        await _context.SaveChangesAsync();
        return NoContent();
    }
        
}
