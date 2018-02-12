import HttpContract from '@/service/contract/Http';

export default class Authors {
    private url: string = '/v2/authors';
    private http: any;

    constructor(http: HttpContract) {
        this.http = http;
    }

    public getCollection(params: {[key: string]: string} = {}): Promise<{[key: string]: any}> {
        return this.http.get(this.url, params)
    };

    public getById(id: number): Promise<{[key: string]: any}> {
        return this.http.get(`${this.url}/${id}`)
    };
}