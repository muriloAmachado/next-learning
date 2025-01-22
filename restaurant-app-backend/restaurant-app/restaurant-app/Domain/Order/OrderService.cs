using Microsoft.EntityFrameworkCore;

namespace restaurant_app.Domain.Order
{
    public class OrderService(DataContext dataContext) : IOrderService
    {
        public async Task<OrderModel> GetById(Guid id)
        {
            var orderModel = await GetQueryable().FirstOrDefaultAsync(orderModel => orderModel.id == id);

            if (orderModel == null) throw new Exception("tem nada lek");

            return orderModel;
        }

        public IQueryable<OrderModel> GetQueryable()
        {
            return dataContext.Orders
                .OrderBy(orderModel => orderModel.id);
        }

    }
}
