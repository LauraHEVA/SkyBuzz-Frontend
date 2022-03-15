import { BuzzBasic, BuzzObject } from "./buzzInterfaces";

export interface SomeActionInterface {
  type: string;
}

export interface LoadAllBuzsActionInterface extends SomeActionInterface {
  buzzs: BuzzObject[];
}

export interface ActionWithIdInterface extends SomeActionInterface {
  id: string;
}

export interface AddNewBuzzActionInterface extends SomeActionInterface {
  buzz: BuzzBasic;
}
