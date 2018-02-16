export default interface Http {

    get(url: string, params?: {[key: string]: string}): Promise<{[key: string]: any}>

    post(url: string, params?: {[key: string]: string}): Promise<{[key: string]: any}>
}