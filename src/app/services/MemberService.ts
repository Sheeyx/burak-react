import axios from "axios";
import { serverAPI } from "../../lib/config";
import { Product, ProductInquire } from "../../lib/types/product";
import { Member } from "../../lib/types/member";

class MemberService {
    private readonly path: string;

    constructor(){
        this.path = serverAPI;
    }

    public async getTopUsers():Promise<[]>{
        try {     
            let url = `${this.path}/member/top-users`;
            const result = await axios.get(url);
            console.log("getTopUsers: ",result);
            
            return result.data;
        } catch (err) {
            console.log("Error, getTopUsers", err);
            throw err;
        }
    }
}

export default MemberService;