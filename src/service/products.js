
import { BehaviorSubject } from "rxjs";

const URL_MERCADOLIBREAPI = "https://api.mercadolibre.com";
const PATH_SEARCH = "/sites/MCO/search?q=";
const PATH_BY_ID = "/items/";

const products = new BehaviorSubject([]);

export const getProducts = () => {
    return products;
}

export const setProducts = (data) => {
    products.next(data);
}

export const getProductsByKeyword = async (keyword) => {
    const response = await fetch(`${URL_MERCADOLIBREAPI}${PATH_SEARCH}${keyword}`);
    const data = await response.json();
    return data;
}

export const getProductById = async (id) => {
    const response = await fetch(`${URL_MERCADOLIBREAPI}${PATH_BY_ID}${id}`);
    const data = await response.json();
    return data;
}