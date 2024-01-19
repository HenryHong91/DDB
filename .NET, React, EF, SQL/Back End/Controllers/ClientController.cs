using Henry_Task1.Data;
using Henry_Task1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Henry_Task1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly ClientContext _clientcontext;
        public ClientController(ClientContext clientContext)
        {
            _clientcontext = clientContext;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Client>>> GetClient()
        {
            if (_clientcontext.Clients == null)
            {
                return NotFound();
            }
            return await _clientcontext.Clients.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(Guid id)
        {
            if (_clientcontext.Clients == null)
            {
                return NotFound();
            }
            var client = await _clientcontext.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }
            return client;
        }

        [HttpPost]

        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _clientcontext.Clients.Add(client);
            await _clientcontext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetClient), new { id = client.Id }, client);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutClient(Guid id, Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }


            _clientcontext.Entry(client).State = EntityState.Modified;
            try
            {
                await _clientcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task <ActionResult> DeleteClient (Guid id)
        {
            if(_clientcontext.Clients == null)
            {
                return NotFound();
            }
            var client = await _clientcontext.Clients.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }
            _clientcontext.Clients.Remove(client);
            await _clientcontext.SaveChangesAsync();

            return Ok();
        }
    }
}
