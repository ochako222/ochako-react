import { AxiosInstance } from 'axios';
import httpClient from '../http-client';
import { BASE_URL } from '../confg';

type HttpClient = AxiosInstance;

export type StaticThis<T> = { new (...args: any[]): T };

abstract class MyMemoryService {
    protected readonly httpClient: HttpClient;

    protected readonly baseUrl: string;

    constructor(httpInstance: AxiosInstance) {
        this.httpClient = httpInstance;
        this.baseUrl = BASE_URL;
    }

    static create<T extends MyMemoryService>(this: StaticThis<T>): T {
        return new this(httpClient);
    }
}

export default MyMemoryService;
