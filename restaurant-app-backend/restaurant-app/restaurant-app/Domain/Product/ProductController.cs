using Microsoft.AspNetCore.Mvc;
using restaurant_app.Model;
using restaurant_app.ViewModel;

namespace restaurant_app.Domain.Product
{
    [ApiController]
    [Route("api/v1/product")]
    public class ProductController : Controller
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpPost]
        public IActionResult Add(ProductViewModel productView)
        {
            var product = new ProductModel(productView.name, productView.description, productView.price);

            _productRepository.Add(product);

            return Ok();
        }

        [HttpGet]
        public IActionResult Get()
        {
            var products = _productRepository.Get();
            return Ok(products);
        }

        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            var product = _productRepository.Delete(id);
            return Ok(product);
        }
    }
}
