using restaurant_app.Domain.Product.DTO;
using restaurant_app.Model;

namespace restaurant_app.Domain.Product
{
    public class ProductRepository (
            DataContext dataContext
        ): IProductRepository
    {
        public void Add(ProductModel product)
        {
            dataContext.Products.Add(product);
            dataContext.SaveChanges();
        }

        public List<ProductDto> Get()
        {
            return dataContext.Products.Select(p =>
                new ProductDto()
                {
                    Id = p.id,
                    Name = p.name,
                    Description = p.description,
                    Price = p.price
                }
            ).ToList();
        }

        public ProductModel Delete(Guid id)
        {
            var product = dataContext.Products.FirstOrDefault(p => p.id == id);
            if (product != null)
            {
                dataContext.Products.Remove(product);
                dataContext.SaveChanges();
                return product;
            }

            return null;
        }
    }
}
