"use client"

import "../global.css"
import AvailableProducts from "@/app/novoPedido/_components/AvailableProducts";
import OrderList from "@/app/novoPedido/_components/OrderList";
import {createContext, useContext, useEffect, useState} from "react";
import {Product, useProductsContext} from "@/app/layout";
import Button from "@/_components/Button";
import {useRouter} from "next/navigation";
import {formarterPrice} from "@/app/novoProduto/_components/ProductsList";
import ConfirmarPedido from "@/app/novoPedido/ConfirmarPedido/page";
import {useOrderContext} from "@/app/novoPedido/layout";

export default function NovoPedido() {

    const { products, setProducts } = useProductsContext();
    const [total, setTotal] = useState<number>(0);
    const { orderProducts, setOrderProducts } = useOrderContext();

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

                        <AvailableProducts buttonTitle={"Adicionar"}/>
                </div>
                <div className=" w-3/4">
                    <h1 className="min-w-max text-center mb-2">Seu pedido</h1>
                        <OrderList buttonTitle={"Remover"}/>
                </div>
            </div>
            <div>
                <h1 className="text-end">Total a pagar: {formarterPrice(total)}</h1>
                <Button
                    onClick={() => {
                        setOrderProducts([]);
                        alert("Pedido concluído!")
                        router.push("/")
                    }
                }
                >Confirmar</Button>
            </div>
        </div>
    );
}
