import {Product, useProductsContext} from "@/app/layout";
import Button from "@/_components/Button";
import {ProductService} from "../../../../service/ProductService";

export function formarterPrice(price: number){
    return price.toLocaleString();
}

const productService = new ProductService();

export default function ProductsList(props?:any) {
    const { products, setProducts } = useProductsContext();

    function removeProduct(id: number) {
        productService.deleteProduct(id).then((response) =>{
            productService.getAllProducts().then((response) => {
                setProducts(response.data);
            })
        });
    }

    function editProduct(id: string) {
        let product = products.find((product: Product) => product.id === id);

        props.setName(product.name);
        props.setDescription(product.description);
        props.setPrice(product.price);

        removeProduct(product.id);
    }

    return (
        <ul role="list" className="divide-y space-y-2 divide-gray-200">
            {products.map((product: Product) => (
                <li
                    className="flex-col py-3 bg-amber-200 rounded-md"
                    key={product.id}
                >
                    <h1 className="mb-1 px-2">{product.name}</h1>
                    <div className="border-t-2 border-black border-opacity-15 px-2">
                        <p>{product.description} - {product.id}</p>
                        <p>Preço: R$ {formarterPrice(product.price)}</p>
                    </div>
                    <div className="px-2 flex justify-end min-w-max space-x-2">
                        <Button onClick={() => editProduct(product.id)}>Editar</Button>
                        <Button onClick={() => removeProduct(product.id)}>Excluir</Button>
                    </div>
                </li>
            )
            )}
        </ul>
    )
}