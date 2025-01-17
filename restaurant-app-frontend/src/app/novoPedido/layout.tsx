"use client"

import {createContext, useContext, useState} from "react";
import {Product} from "@/app/layout";

const OrderContext = createContext<any>(undefined);


export default function OrderLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    const [ orderProducts, setOrderProducts ] = useState<Product[]>([]);

    return (
        <OrderContext.Provider value={{orderProducts, setOrderProducts}}>
            {children}
        </OrderContext.Provider>
    )
}

export function useOrderContext(){
    return useContext(OrderContext);
}