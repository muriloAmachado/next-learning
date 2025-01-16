"use client"
import {useContext, createContext, useState, useEffect} from "react";
import {id} from "postcss-selector-parser";

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
}

const listProducts: Product[] = [
    {
        id: "1",
        name: "Notebook",
        description: "Notebook de alta performance com processador Intel i7 e 16GB de RAM.",
        price: 4500.00
    },
    {
        id: "2",
        name: "Smartphone",
        description: "Smartphone com câmera de 108MP e tela AMOLED.",
        price: 2500.50
    },
    {
        id: "3",
        name: "Fone de Ouvido Bluetooth",
        description: "Fone de ouvido com cancelamento de ruído e longa duração de bateria.",
        price: 350.00
    }
];

export type AppContextType = {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const AppContext = createContext<any>(undefined);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const [products, setProducts] = useState<Product[]>(
         listProducts
    );

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

  return (
      <html lang="en">
          <body className="bg-gray-400 flex justify-center items-center w-screen h-screen">
            <AppContext.Provider value={{products, setProducts}}>
                {children}
            </AppContext.Provider>
          </body>
      </html>
  )
}

export function useProductsContext(){
    return useContext(AppContext);
}
