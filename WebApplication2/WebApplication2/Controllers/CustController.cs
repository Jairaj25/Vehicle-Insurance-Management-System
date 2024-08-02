using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustController : ControllerBase
    {
        private readonly EFDdataContext _context;

        public CustController(EFDdataContext context)
        {
            _context = context;
        }

        // GET: api/Cust
        [HttpGet]
        public IEnumerable<Cust> GetCusts()
        {
            return _context.Custs;
        }

        // GET: api/Cust/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCust([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cust = await _context.Custs.FindAsync(id);

            if (cust == null)
            {
                return NotFound();
            }

            return Ok(cust);
        }

        // PUT: api/Cust/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCust([FromRoute] int id, [FromBody] Cust cust)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cust.Cust_id)
            {
                return BadRequest();
            }

            _context.Entry(cust).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustExists(id))
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

        // POST: api/Cust
        [HttpPost]
        public async Task<IActionResult> PostCust([FromBody] Cust cust)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Custs.Add(cust);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCust", new { id = cust.Cust_id }, cust);
        }

        // DELETE: api/Cust/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCust([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cust = await _context.Custs.FindAsync(id);
            if (cust == null)
            {
                return NotFound();
            }

            _context.Custs.Remove(cust);
            await _context.SaveChangesAsync();

            return Ok(cust);
        }

        private bool CustExists(int id)
        {
            return _context.Custs.Any(e => e.Cust_id == id);
        }
    }
}