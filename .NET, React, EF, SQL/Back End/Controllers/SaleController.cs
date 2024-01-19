using Henry_Task1.Data;
using Henry_Task1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Henry_Task1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleController : ControllerBase
    {
        private readonly ClientContext _salecontext;
        public SaleController(ClientContext saleContext)
        {
            _salecontext = saleContext;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Sale>>> GetSale()
        {
            if (_salecontext.Sales == null)
            {
                return NotFound();
            }
            return await _salecontext.Sales.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Sale>> GetSale(Guid id)
        {
            if (_salecontext.Sales == null)
            {
                return NotFound();
            }
            var Sale = await _salecontext.Sales.FindAsync(id);
            if (Sale == null)
            {
                return NotFound();
            }
            return Sale;
        }

        [HttpPost]

        public async Task<ActionResult<Sale>> PostSale(Sale Sale)
        {
            _salecontext.Sales.Add(Sale);
            await _salecontext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSale), new { id = Sale.Id }, Sale);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutSale(Guid id, Sale Sale)
        {
            if (id != Sale.Id)
            {
                return BadRequest();
            }


            _salecontext.Entry(Sale).State = EntityState.Modified;
            try
            {
                await _salecontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteSale(Guid id)
        {
            if (_salecontext.Sales == null)
            {
                return NotFound();
            }
            var Sale = await _salecontext.Sales.FindAsync(id);
            if (Sale == null)
            {
                return NotFound();
            }
            _salecontext.Sales.Remove(Sale);
            await _salecontext.SaveChangesAsync();

            return Ok();
        }
    }
}
