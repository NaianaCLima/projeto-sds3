import { type } from "node:os"
import { Seller } from "./seller"

export type Sele = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
       
}

export type SelePage = {
    content?: Sele[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
} 

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SeleSucess = {
    sellerName: string;
    visited: number;
    deals: number;
}