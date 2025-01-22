namespace restaurant_app.Domain.Product.DTO
{
    public class ProductDto
    {
        public Guid Id { get; init; }
        public required string Name { get; init; }
        public required string Description { get; init; }
        public required double Price { get; init; }
    }
}
