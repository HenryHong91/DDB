using Henry_Task1.Data;
using Henry_Task1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Henry_Task1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ClientContext _productcontext;
        public ProductController(ClientContext productContext)
        {
            _productcontext = productContext;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<Product>>> Getproduct()
        {
            if (_productcontext.Products == null)
            {
                return NotFound();
            }
            return await _productcontext.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            if (_productcontext.Products == null)
            {
                return NotFound();
            }
            var product = await _productcontext.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return product;
        }

        [HttpPost]

        public async Task<ActionResult<Product>> PostProduct( Product product)
        {
            _productcontext.Products.Add(product);
            await _productcontext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutClient(Guid id, Product products)
        {
            if (id != products.Id)
            {
                return BadRequest();
            }


            _productcontext.Entry(products).State = EntityState.Modified;
            try
            {
                await _productcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteClient(Guid id)
        {
            if (_productcontext.Products == null)
            {
                return NotFound();
            }
            var product = await _productcontext.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            _productcontext.Products.Remove(product);
            await _productcontext.SaveChangesAsync();

            return Ok();
        }
    }
}
