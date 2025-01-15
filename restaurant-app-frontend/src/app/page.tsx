'use client'

import "./global.css"
import Button from "@/_components/Button";
import {useRouter} from "next/navigation";
import { createContext, useContext, useState } from 'react';
import {Product} from "@/app/novoProduto/page";
import {ProdcutsContext} from "@/app/_ProductContext";

export default function Home() {

    const [products, setProducts] = useState<Product[]>([]);

    const router = useRouter();

    function cadastrarProduto() {
        router.push("/novoProduto");
    }

    function cadastrarPedido() {
        router.push("/novoPedido");
    }

    return (
        <ProdcutsContext.Provider value={{setProducts}}>
        <div className="flex w-96 justify-between">
            <div>
                <Button onClick={cadastrarProduto}>Novo Produto</Button>
            </div> 
            <div>
                <Button onClick={cadastrarPedido}>Novo Pedido</Button>
            </div>
        </div>
        </ProdcutsContext.Provider>
    );
}


