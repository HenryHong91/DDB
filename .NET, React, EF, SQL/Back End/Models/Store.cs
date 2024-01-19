using System.ComponentModel.DataAnnotations;

namespace Henry_Task1.Models
{
    public class Store

    {
       public Guid Id { get; set; }
       public string Name { get; set; }
        public string? Street { get; set; }
        public string City { get; set; }
        public int Zipcode { get; set; }


    }
}
