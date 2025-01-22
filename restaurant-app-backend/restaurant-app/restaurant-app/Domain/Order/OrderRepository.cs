using restaurant_app.Model;

namespace restaurant_app.Domain.Order
{
    public class OrderRepository (
            DataContext dataContext
        ) : IOrderRepository
    {

        public List<OrderModel> Get()
        {
            return dataContext.Orders.ToList();
        }

        public void Add(OrderModel order)
        {
            dataContext.Orders.Add(order);
            dataContext.SaveChanges();
        }
    }
}
