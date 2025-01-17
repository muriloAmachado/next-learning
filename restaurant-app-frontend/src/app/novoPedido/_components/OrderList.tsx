import {Product, useProductsContext} from "@/app/layout";
import Button from "@/_components/Button";
import {useOrderContext} from "@/app/novoPedido/layout";
import {formarterPrice} from "@/app/novoProduto/_components/ProductsList";

export default function OrderList(props: any) {
    const { products, setProducts } = useProductsContext();
    const { orderProducts, setOrderProducts } = useOrderContext();

    function removeProduct(id: string) {
        setProducts(products.filter((product: Product) => product.id !== id));
    }

    function deleteProduct(id: string) {
        let p = orderProducts.find((product: Product) => product.id === id) as Product;

        setProducts([...products, p]);
        setOrderProducts(orderProducts.filter((product: Product) => product.id !== id));
    }

    return (
        <ul role="list" className="divide-y space-y-2 divide-gray-200">
            {orderProducts.map((product: Product) => (
                <li
                    className="flex-col py-3 bg-amber-200 rounded-md"
                    key={product.id}
                >
                    <h1 className="mb-1 px-2">{product.name}</h1>
                    <div className="border-t-2 border-black border-opacity-15 px-2">
                        <p>{product.description}</p>
                        <p>Preço: R$ {formarterPrice(product.price)}</p>
                    </div>
                    <div className="px-2 flex justify-end min-w-max space-x-2">
                        <Button onClick={() => deleteProduct(product.id)}>{props.buttonTitle}</Button>
                    </div>
                </li>
            )
            )}
        </ul>
    )
}