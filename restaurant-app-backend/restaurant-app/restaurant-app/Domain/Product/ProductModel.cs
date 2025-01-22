using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using restaurant_app.Domain.Order;

namespace restaurant_app.Domain.Product
{
    [Table("products")]
    public class ProductModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid id { get; private set; }
        public string name { get; private set; }
        public string description { get; private set; }
        public double price { get; private set; }
        [JsonIgnore]
        [ForeignKey(nameof(Order))]
        public Guid? order_id { get; set; }
        [JsonIgnore]
        public OrderModel? Order { get; set; }
        public ProductModel(string name, string description, double price)
        {
            this.name = name;
            this.description = description;
            this.price = price;
            order_id = null;
            Order = null;
        }
    }
}
