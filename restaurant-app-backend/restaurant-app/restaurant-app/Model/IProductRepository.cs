using restaurant_app.Domain.Product;
using restaurant_app.Domain.Product.DTO;

namespace restaurant_app.Model
{
    public interface IProductRepository
    {
        void Add(ProductModel product);

        List<ProductDto> Get();

        ProductModel Delete(Guid id);
    }
}
