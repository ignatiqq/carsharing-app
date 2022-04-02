import { ICurrentCity } from "store/location/cities/types"

export interface IOption {
    label: string,
    value: string
  }
  
export interface ISelect {
    options: Array<IOption>,
    searchPlaceholder?: string,
    label: string,
    selected: any,
    clickHandler: (item: ICurrentCity) => void,
    customLabel?: string,
    customValue?: string
}