import { min } from "react-native-reanimated"

export const timeFormatted = (time : any) => {
    const hours = time.slice(11,13) > 12 ? time.slice(11,13)%12 : time.slice(11,13)
    const minutes = time.slice(13,16)
    const apm = time.slice(11,13) > 12 ? "PM" : "AM"
    const formattedTime = hours + minutes + apm
    return formattedTime
}

export const dateFormatted = (time : any) => {
    return (time.slice(0,10))
}
