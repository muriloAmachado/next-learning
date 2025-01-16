"use client"

import "../global.css"
import AvailableProducts from "@/app/novoPedido/_components/AvailableProducts";
import OrderList from "@/app/novoPedido/_components/OrderList";
import {createContext, useContext, useEffect, useState} from "react";
import {Product, useProductsContext} from "@/app/layout";
import Button from "@/_components/Button";
import {useRouter} from "next/navigation";

const OrderContext = createContext<any>(undefined);

export default function NovoPedido() {

    const [ orderProducts, setOrderProducts ] = useState<Product[]>([]);
    const { products, setProducts } = useProductsContext();
    const [total, setTotal] = useState();

    useEffect(() => {
        let t = 0;
        orderProducts.forEach(product => {
            const price = product.price;
            t += price;
        });

        setTotal(t);
    }, [orderProducts]);

    const router = useRouter();

    return (
        <div className="w-11/12">
            <div className="mb-2">
                <Button onClick={() => {
                        console.log(orderProducts);
                        if (orderProducts.length > 0) {
                            orderProducts.forEach((product: Product) => {
                                setProducts([...products, product]);
                            })
                        }
                        router.push("/")
                    }
                }
                >{`<`} </Button>
            </div>
            <div className="w-full bg-white flex p-2 items-center rounded-md justify-center gap-x-2">
                <div className="flex-col align-middle justify-center w-3/4">
                    <h1 className="min-w-max text-center mb-2">Produtos disponíveis</h1>
                    <OrderContext.Provider value={{orderProducts, setOrderProducts}}>
                        <AvailableProducts buttonTitle={"Adicionar"}/>
                    </OrderContext.Provider>
                </div>
                <div className=" w-3/4">
                    <h1 className="min-w-max text-center mb-2">Seu pedido</h1>
                    <OrderContext.Provider value={{orderProducts, setOrderProducts}}>
                        <OrderList buttonTitle={"Remover"}/>
                    </OrderContext.Provider>
                </div>
            </div>
            <div>
                <h1 className="text-end">Total a pagar: {total}</h1>
                <Button onClick={() => console.log(total)}></Button>
            </div>
        </div>
    );
}

export function useOrderContext(){
    return useContext(OrderContext);
}
