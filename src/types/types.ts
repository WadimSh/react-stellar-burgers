import { type } from "os";

export type TLocation = {
  background: {
		pathname: string;
		search: string;
		hash: string;
		state: null;
		key: string;
	}
	from: string;
	state?: object;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngredientConstructor = TIngredient & {
	id: string;
};

export type TUser = {
  name: string;
  email: string;
};

export type TOrder = {
  ingredients: Array<string>;
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

export type TFeedResponse = {
	success: boolean;
  orders: Array<TOrder>;
	total: number;
	totalToday: number;
}
