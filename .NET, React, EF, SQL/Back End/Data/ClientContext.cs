using Henry_Task1.Models;
using Microsoft.EntityFrameworkCore;

namespace Henry_Task1.Data
{
    public class ClientContext : DbContext
    {
        public ClientContext(DbContextOptions options) : base(options)
        {

        }
            

        public DbSet <Client> Clients { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public DbSet<Store> Stores { get; set; }
   
    }
}
