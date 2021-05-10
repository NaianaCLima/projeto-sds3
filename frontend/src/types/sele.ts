import { type } from "node:os"

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SeleSucess = {
    sellerName: string;
    visited: number;
    deals: number;
}