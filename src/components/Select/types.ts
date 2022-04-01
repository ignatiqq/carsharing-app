export interface IOption {
    label: string,
    value: string
  }
  
export interface ISelect {
    options: Array<IOption>,
    searchPlaceholder?: string,
    label: string,
    selected: any,
    onClick: (item: IOption) => void,
    customLabel?: string,
    customValue?: string
}