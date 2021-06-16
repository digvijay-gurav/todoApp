import axios from "axios";

export class CommonApiService {
    private _baseUrl: string;
    private hostContext: any;
    constructor() {
        this._baseUrl = "http://localhost:9000/"; 
    }

    public get(url: string): Promise<any> {
        return axios.get(`${this._baseUrl}/${url}`);
    }
    public save(url: string,data:any, config?: any){
        return axios.post(`${this._baseUrl}/${url}`, data, config);
     }

     public delete(url: string, config?: any){
         return axios.delete(`${this._baseUrl}/${url}`,config);
     }
 
     public Update(url: string,data:any, config?: any){
         return axios.patch(`${this._baseUrl}/${url}`, data, config);
     }
}