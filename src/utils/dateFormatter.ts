export const getUTCDate = (date: number) => {
    return new Date(date - ((new Date().getTimezoneOffset()) * 60))
}