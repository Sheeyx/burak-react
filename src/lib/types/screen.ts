
import { Member } from "./member";
import { Product } from "./product";

/***** REACT APP STATE *****/

export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
}


// HOME PAGE
export interface HomePageState {
    popularDishes: Product[],
    newDishes: Product[],
    topUsers: Member[],
}  

export interface ProductsPageState {
    restaurant: Member | null,
    chosenProduct: Product | null,
    products: Product[],
}  

// PRODUCTS PAGE
// ORDERS PAGE

