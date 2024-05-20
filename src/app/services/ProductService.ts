import axios from "axios";
import { serverAPI } from "../../lib/config";
import { Product, ProductInquire } from "../../lib/types/product";
import { Member } from "../../lib/types/member";

class ProductService {
    private readonly path: string;

    constructor(){
        this.path = serverAPI;
    }

    public async getProducts(input: ProductInquire):Promise<Product[]>{
        try {     
            let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
            if(input.productCollection) url += `&productCollection=${input.productCollection}`;
            if(input.search) url += `&search=${input.search}`;

            const result = await axios.get(url);
            console.log("getProducts: ",result);
            
            return result.data;
        } catch (err) {
            console.log("Error, getProduct", err);
            throw err;
        }
    }

    public async getProduct(productId: string) : Promise<Product>{
        try {
            let url = `${this.path}/product/${productId}`;
            const result = await axios.get(url, {withCredentials: true});
            console.log("getProduct: ",result);
            
            return result.data;
        } catch (err) {
            console.log("Error, getProduct", err);
            throw err;
        }
    }

}

export default ProductService;