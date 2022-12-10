import { ReactNode } from "react";

export type TUser = {
    email: string;
    name: string;
    password?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type TIngredient = {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: "bun" | "main" | "sauce";
    __v: number;
    _id: string;
    id?: string;
    count?: number;
    index?: number;
}

export type TOrder = {
    createdAt: string;
    ingredients: (TIngredient | undefined)[];
    name: string;
    number: number;
    owner: TUser;
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
}
export type TOrderImage = {
    ingredients: (TIngredient | undefined)[] | undefined; 
    createdAt: string; 
    name: string; 
    number: number; 
    status: string; 
    updatedAt: number; 
    _id: string
}
export type TOrder1 = {
    createdAt: string;
    ingredients?: string[];
    name: string;
    number: number;
    status: string;
    updatedAt: number;
    _id: string;
}

export type TIngredientConstructor = {
    card: TIngredient;
    id: string;
}

export type TIngredientsInfo = {
    _id: string;
    ingredients: TIngredient[];
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
}

export type TFeed = {
    createdAt: string;
    ingredients: TIngredient[] | undefined;
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
}

export type TFeedResponce = {
    success: boolean;
    total: number;
    totalToday: number;
    orders: Array<TFeed>;
}

export type TWsSocketMiddlewareActions = {
    wsInit: string;
    wsSendOrder: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
}


export type TOrderDetailsResponse = {
    name: string
    order: TOrder;
    success: boolean;
}

export type TIngredientResponse = {
    data: Array<TIngredient>;
    success: boolean;
}

export type TUserResponce = {
    success: boolean;
    user: TUser;
    accessToken: string;
    refreshToken: string;
    message: string;
}

export type TUserLogoutResponse = {
    message: string;
    success: boolean;
    refreshToken: string;
}

export type TModal = {
    active: boolean;
    onClose: () => void;
    children: ReactNode;
}

export type TModalOverlay = {
    active: boolean;
    closePopup: () => void;
}