"use client"

import "../global.css"
import Button from "@/_components/Button";
import Input from "@/_components/Input";
import ProductsList from "@/app/novoProduto/_components/ProductsList";
import {useState, useContext} from "react";
import {useRouter} from "next/navigation";
import {ProdcutsContext} from "@/app/_ProductContext";

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
}

export default function novoProduto(props: any) {

    const {setProducts} = useContext(ProdcutsContext);

    let productList: Product[] = [{
        id: 1,
        name: "TESTE1",
        description: "",
        price: 0,
    }, {
        id: 2,
        name: "TESTE2",
        description: "",
        price: 0,
    }]

    function adicionarProduto() {
        const p1: Product = {
            id: 3,
            name: "TESTE3",
            description: "",
            price: 0,
        }
        setProducts([...products, p1]);
    }

    const router = useRouter();

    return (

        <div className="w-96 h-96 flex flex-col space-y-3 justify-center">
            <div>
                <Button onClick={() => router.push("/")}>{`<`} </Button>
            </div>
            <p>Quantidade de produtos cadastrados: {products.length}</p>
            <Input
                placeholder="Nome do produto"
                type="text"
            />
            <Input
                placeholder="Descrição"
                type="text"
            />
            <Input
                placeholder="Preço"
                type="text"
            />
            <div className="flex justify-end">
                <Button onClick={() => adicionarProduto()}>Cadastrar</Button>
            </div>
            <div>
                <ProductsList products={products} />
            </div>
        </div>
    );
}
