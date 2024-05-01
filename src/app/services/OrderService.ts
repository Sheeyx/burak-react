import axios from "axios";
import { serverAPI } from "../../lib/config";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverAPI;
  }
}

export default OrderService