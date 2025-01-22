using restaurant_app.Domain.Order;
using restaurant_app.Domain.Product;

namespace restaurant_app.Model
{
    public interface IOrderRepository
    {
        void Add(OrderModel order);

        List<OrderModel> Get();
    }
}
