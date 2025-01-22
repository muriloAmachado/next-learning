using Microsoft.AspNetCore.Mvc;
using restaurant_app.Domain.Product;
using restaurant_app.Domain.Product.DTO;
using restaurant_app.Model;
using restaurant_app.ViewModel;

namespace restaurant_app.Domain.Order
{
    [ApiController]
    [Route("api/v1/order")]
    public class OrderController (
            IOrderService orderService,
            IOrderRepository _orderRepository
        )
        : Controller
    {

        [HttpPost]
        public IActionResult Add(List<ProductModel> products)
        {
            var order = new OrderModel(products);
            _orderRepository.Add(order);

            return Ok();
        }


        [HttpGet]
        public async Task<IActionResult> GetById(Guid id)
        {
            var purchaseModel = await orderService.GetById(id);

            return Ok(purchaseModel);
        }
    }
}
