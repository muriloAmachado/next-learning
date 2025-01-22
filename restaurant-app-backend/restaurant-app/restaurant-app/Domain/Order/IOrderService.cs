using System.Linq;

namespace restaurant_app.Domain.Order
{
    public interface IOrderService
    {
        Task<OrderModel> GetById(Guid id);
    }
}
