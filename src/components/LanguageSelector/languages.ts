export interface ILanguage {
    id: number,
    label: string,
    language: string
}

export type ILanguages = Array<ILanguage>

export const languages: ILanguages = [
    {
        id: 0,
        label: "Eng",
        language: "en"
    },
    {
        id: 1,
        label: "Rus",
        language: "ru"
    }
]