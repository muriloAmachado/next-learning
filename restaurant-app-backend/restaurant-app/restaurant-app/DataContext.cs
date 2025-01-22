using Microsoft.EntityFrameworkCore;
using restaurant_app.Domain.Order;
using restaurant_app.Domain.Product;

namespace restaurant_app
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<ProductModel> Products { get; set; }
        public DbSet<OrderModel> Orders { get; set; }
    }
}
