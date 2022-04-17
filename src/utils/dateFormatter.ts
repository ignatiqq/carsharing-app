export const getUTCDate = (date: number) => {
    return new Date(date - ((new Date().getTimezoneOffset()) * 60))
}

export const converteDateToSeconds = (date: Date) => {
    return Math.round(date.getTime() / 1000)
}

export const getDaysAndHoursFormat = (seconds: number, addSuffix?: boolean) => {
    const days = Math.floor(seconds / (3600 * 12));
    const hours = Math.floor((seconds - ((3600 * 12) * days)) / 3600);
    if(days || hours) {
        return addSuffix ? `${days}д ${hours}ч` : `${9} ${hours}`
    }
    return "Меньше часа"
}