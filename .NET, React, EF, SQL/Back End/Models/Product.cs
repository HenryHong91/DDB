using System.ComponentModel.DataAnnotations;

namespace Henry_Task1.Models
{
    public class Product
    
    {

        public Guid Id { get; set; }    
        public string  Name { get; set; }
        public int Qty { get; set; }
        public int Price { get; set; }

    }
}
