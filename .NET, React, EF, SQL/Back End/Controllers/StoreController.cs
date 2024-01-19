using Henry_Task1.Data;
using Henry_Task1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Henry_Task1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly ClientContext _storecontext;
        public StoreController(ClientContext storeContext)
        {
            _storecontext = storeContext;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Store>>> GetStore()
        {
            if (_storecontext.Stores == null)
            {
                return NotFound();
            }
            return await _storecontext.Stores.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Store>> GetStore (Guid id)
        {
            if (_storecontext.Stores == null)
            {
                return NotFound();
            }
            var store = await _storecontext.Stores.FindAsync(id);
            if (store == null)
            {
                return NotFound();
            }
            return store;
        }

        [HttpPost]

        public async Task<ActionResult<Store>> PostStore(Store store)
        {
            _storecontext.Stores.Add(store);
            await _storecontext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStore), new { id = store.Id }, store);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutStore(Guid id, Store store)
        {
            if (id != store.Id)
            {
                return BadRequest();
            }


            _storecontext.Entry(store).State = EntityState.Modified;
            try
            {
                await _storecontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStore(Guid id)
        {
            if (_storecontext.Stores == null)
            {
                return NotFound();
            }
            var store = await _storecontext.Stores.FindAsync(id);
            if (store == null)
            {
                return NotFound();
            }
            _storecontext.Stores.Remove(store);
            await _storecontext.SaveChangesAsync();

            return Ok();
        }
    }
}
