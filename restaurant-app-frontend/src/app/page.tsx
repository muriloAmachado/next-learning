'use client'

import "./global.css"
import Button from "@/_components/Button";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    function cadastrarProduto() {
        router.push("/novoProduto");
    }

    function cadastrarPedido() {
        router.push("/novoPedido");
    }

    return (
        <div className="flex w-96 justify-between">
            <div>
                <Button onClick={cadastrarProduto}>Novo Produto</Button>
            </div>
            <div>
                <Button onClick={cadastrarPedido}>Novo Pedido</Button>
            </div>
        </div>
    );
}


