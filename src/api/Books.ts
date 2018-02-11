import HttpContract from '@/service/contract/Http';

export default class Books {
    private url: string = '/v2/books';
    private http: any;

    constructor(http: HttpContract) {
        this.http = http;
    }

    public getCollection(): Promise<{[key: string]: any}> {
        return this.http.get(this.url)
    };

    public getById(id: number): Promise<{[key: string]: any}> {
        return this.http.get(`${this.url}/${id}`)
    };
}