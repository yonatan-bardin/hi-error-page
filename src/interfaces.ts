export interface Product {
    id: string;
    imgPath: string;
    price: number;
    name: string;
    description?: string;
    category: Category;
}

// eslint-disable-next-line no-shadow
export enum Category {
    DRESS = 'DRESS',
    SKIRT = 'SKIRT',
    TOP = 'TOP',
    PANT = 'PANT',
}
