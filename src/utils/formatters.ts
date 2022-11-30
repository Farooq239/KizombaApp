import { emailFormat, passwordFormat } from "./validations"

export const emailFormatter = (email : string) => {
    const result = email.length > 0 
        ? emailFormat.test(email)
            ? 'true'
            : 'Invalid Email : example@email.com'
        : 'true'
    return result
}
export const passwordFormatter = (password : string) => {
    const result = password.length > 0 
        ? passwordFormat.test(password)
            ? 'true'
            : 'Password must be 8 characters containing at least one capital letter, one small letter, one digit and one special character'
        : 'true'
    return result
}
export const bdsmTestFormatter = (link : string) => {
    const result = link.length > 0 
            && link.includes('bdsmtest.org')
                ? 'true'
                : 'Invalid address'
    return result
}
