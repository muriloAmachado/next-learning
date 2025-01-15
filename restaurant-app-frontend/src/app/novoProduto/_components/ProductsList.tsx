import {Product} from "@/app/novoProduto/page";

export default function ProductsList(props: Product[]) {

    return (
        <ul role="list" className="divide-y divide-gray-200">
            {props.products.map((product: Product) => (
                <li
                    className="flex justify-between gap-x-6 py-5"
                    key={product.id}>{product.name}</li>
            )
            )}
        </ul>
    )
}