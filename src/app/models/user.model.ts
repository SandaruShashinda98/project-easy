

// export interface Buyer extends User {
//   shoulder?: number,
//   hight?:number,
//   chest?: number,
//   belly?:number,
//   hip?: number,
//   kneeToToe?: number,
// }

// export interface Seller extends User{
//   storeName?: string,
//   storeDescription?: string,
// }

export interface User {
  _id?: any,
  name?: string,
  email: string,
  password?: string,
  address?: string,
  permissionType?: string,

  //only for seller
  storeName?: string,
  storeDescription?: string,
}


export interface IBuyerRequest {
  userId?: any;
  armLength?: number;
  belly?: number;
  chestWidth?: number;
  hip?: number;
  kneeToToe?: number;
  shoulderToWaist?: number;
  shoulderWidth?: number;
  waist?: number;
  waistToKnee?: number;
}

export interface IProductRequest{
  userId?: any
  brand?: string;

  // Product
  gender?: string; // 'MALE' or 'FEMALE'
  description?: string;
  availableCount?: number;
  imageUrl?: string;

  // Body Measurements
  bodyArea?: string; //UPPER or LOWER
  armLength?: number;
  belly?: number;
  chestWidth?: number;
  hip?: number;
  kneeToToe?: number;
  shoulderToWaist?: number;
  shoulderWidth?: number;
  waist?: number;
  waistToKnee?: number;

  //from ML
  bodyType?: string;
}

export interface IBodyCategoryRequest{
  bodyArea?: string;
  armLength?: number[];
  belly?: number[];
  chestWidth?:number[];
  hip?: number[];
  kneeToToe?:number[];
  shoulderToWaist?:number[];
  shoulderWidth?:number[];
  waist?: number[];
  waistToKnee?: number[];
}
