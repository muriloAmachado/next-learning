"use client"

import "../global.css"
import Button from "@/_components/Button";
import Input from "@/_components/Input";
import ProductsList from "@/app/novoProduto/_components/ProductsList";
import {useRouter} from "next/navigation";
import { useProductsContext} from "@/app/layout";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {ProductService} from "../../../service/ProductService";
import { Product } from "../../../lib/types";

export default function novoProduto(props: any) {

    const { products, setProducts } = useProductsContext();
    const router = useRouter();
    const productService = new ProductService();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number>(0);

    function addNewProduct(name:string, description:string, price:string | number) {

        const numericPrice = parseFloat(
            price.toString().replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
                .trim()
        );

        const newProduct:Product = {
            name: name,
            description: description,
            price: numericPrice,
        };

        productService.newProduct(newProduct)
            .then((response) =>{
                productService.getAllProducts().then((response) => {
                    setProducts(response.data);
                })
            })

        setName("")
        setDescription("");
        setPrice(0);
        return newProduct;
    }

    const mascaraMoeda = (e) => {
        const onlyDigits = e.target.value
            .split("")
            .filter((s:string) => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        e.target.value = maskCurrency(digitsFloat)
    }

    const maskCurrency = (valor: any, locale = 'pt-BR', currency = 'BRL') => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        }).format(valor)
    }

    return (
        <div className="w-96 h-screen p-4 space-y-2">
            <div className="flex flex-col space-y-2">
            <div>
                <Button onClick={() => router.push("/")}>{`<`} </Button>
            </div>
            <Input
                placeholder="Nome do produto"
                type="text"
                value={name}
                onChange={(e:any) => setName(e.target.value)}
            />
            <Input
                placeholder="Descrição"
                type="text"
                value={description}
                onChange={(e:any) => setDescription(e.target.value)}
            />
            <Input
                placeholder="Preço"
                type="text"
                value={price}
                onChange={(e:any) => setPrice(e.target.value)}
                onInput={() => mascaraMoeda(event)}
            />
            <div className="flex justify-end">
                <Button onClick={() => {
                    if(name!=="" || description!=="" || price!==0) {
                        addNewProduct(name, description, price)
                    }else {
                            alert("Preencha todos os campos para cadastrar o novo produto")
                        }
                    }
                }>
                    Cadastrar</Button>
            </div>
            </div>

            <div>
                <ProductsList setName={setName}
                    setDescription={setDescription}
                    setPrice={setPrice}
                              name={name}
                              description={description}
                              price={price}
                              addNewProduct={addNewProduct}
                />
            </div>
        </div>
    );
}
