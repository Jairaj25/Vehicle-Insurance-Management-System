﻿using System;
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
    public class PolicyController : ControllerBase
    {
        private readonly EFDdataContext _context;

        public PolicyController(EFDdataContext context)
        {
            _context = context;
        }

        // GET: api/Policy
        [HttpGet]
        public IEnumerable<Policy> GetPolicy()
        {
            return _context.Policy;
        }

        // GET: api/Policy/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPolicy([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var policy = await _context.Policy.FindAsync(id);

            if (policy == null)
            {
                return NotFound();
            }

            return Ok(policy);
        }

        // PUT: api/Policy/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPolicy([FromRoute] int id, [FromBody] Policy policy)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != policy.Policy_id)
            {
                return BadRequest();
            }

            _context.Entry(policy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PolicyExists(id))
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

        // POST: api/Policy
        [HttpPost]
        public async Task<IActionResult> PostPolicy([FromBody] Policy policy)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Policy.Add(policy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPolicy", new { id = policy.Policy_id }, policy);
        }

        // DELETE: api/Policy/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePolicy([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var policy = await _context.Policy.FindAsync(id);
            if (policy == null)
            {
                return NotFound();
            }

            _context.Policy.Remove(policy);
            await _context.SaveChangesAsync();

            return Ok(policy);
        }

        private bool PolicyExists(int id)
        {
            return _context.Policy.Any(e => e.Policy_id == id);
        }
    }
}