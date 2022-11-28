export type TUser = {
	email: string;
	name: string;
  password?: string;
	createdAt?: string;
	updatedAt?: string;
}
export type TAccessToken = {
	accessToken: string;
}
export type TRefreshToken = {
	refreshToken: string;
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
}

export type TIngredientConstructor = {
  card: TIngredient;
  id: string;
}

export type TFeed = {
	createdAt: string;
	ingredients: string[];
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

