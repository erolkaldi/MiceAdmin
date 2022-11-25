import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiAddress: string = environment.baseUrl;
    constructor(private httpClient: HttpClient) { }

    get(url: string): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
       
        return this.httpClient.get<Promise<any>>(fullUrl);
    }

    post(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        return this.httpClient
            .post<Promise<any>>(fullUrl, body);

    }

    delete(url: string, body: any): Observable<any> {
        const fullUrl: string = this.apiAddress + url;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: body
        };
        return this.httpClient.delete<Promise<any>>(fullUrl, options);
    }
    signIn(url: string, model: any): Observable<any> {
      
      return this.httpClient.post<any>(this.apiAddress + url,
          model );



  }
}
