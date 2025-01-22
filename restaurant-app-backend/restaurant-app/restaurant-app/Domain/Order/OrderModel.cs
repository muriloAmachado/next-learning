using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using restaurant_app.Domain.Product;

namespace restaurant_app.Domain.Order
{
    [Table("orders")]
    public class OrderModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid id { get; set; }
        
        public List<ProductModel> order_products { get; set; }
        public double total { get; set; }

        public OrderModel()
        {
            order_products = new List<ProductModel>();
            total = 0;
        }

        public OrderModel(List<ProductModel> products)
        {
            order_products = products;
            total = products.Sum(item => item.price);
        }
    }
}
