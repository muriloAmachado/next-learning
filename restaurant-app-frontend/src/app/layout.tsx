"use client"
import {useContext, createContext, useState, ReactNode, useEffect} from "react";
import {Product} from "../../lib/types";
import {ProductService} from "../../service/ProductService";

export type AppContextType = {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

    const [products, setProducts] = useState<Product[]>([])
    const productService = new ProductService();

    useEffect(() => {
        productService.getAllProducts().then((response) => {
            console.log(response.data);
            setProducts(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [])

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
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useProductsContext must be used within a context");
    }
    return context;
}
