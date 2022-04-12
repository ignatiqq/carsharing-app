export interface IOption {
    label: string,
    value: string
  }
  
export interface ISelect {
    options: Array <IOption | any> | null,
    searchPlaceholder?: string,
    label: string,
    selected: IOption | any,
    clickHandler: (item: IOption | any) => void,
    customLabel?: string,
    customValue?: string,
    width?: number
}