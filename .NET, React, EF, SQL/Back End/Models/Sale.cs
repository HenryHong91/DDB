using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace Henry_Task1.Models
{
    public class Sale
    {
            public Guid Id { get; set; }
            public string Product { get; set; }
            public int  Qty { get; set; } 
            public int Price {  get; set; }
            public string SaleDate    { get; set; }
    }
}
