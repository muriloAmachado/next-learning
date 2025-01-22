import axios from "axios";
import {Product} from "../lib/types";

export const axiosInstance = axios.create({
    baseURL: "https://localhost:7007",
})

export class ProductService {
    getAllProducts(){
        return axiosInstance.get("/api/v1/product");
    }

    newProduct(product : Product){
        return axiosInstance.post("/api/v1/product", product );
    }

    deleteProduct(id: number){
        return axiosInstance.delete(`/api/v1/product?id=`+`${id}`);
    }
}