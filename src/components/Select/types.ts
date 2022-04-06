export interface IOption {
    label: string,
    value: string
  }
  
export interface ISelect {
    options: Array<any> | null,
    searchPlaceholder?: string,
    label: string,
    selected: any,
    clickHandler: (item: any) => void,
    customLabel?: string,
    customValue?: string
}