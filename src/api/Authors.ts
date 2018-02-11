import http from '../service/Http'

export default class Authors {
    private static url: string = '/v2/authors';

    public static getCollection(): Promise<{[key: string]: any}> {
        return http.get(this.url)
    };

    public static getById(id: number): Promise<{[key: string]: any}> {
        return http.get(`${this.url}/${id}`)
    };
}