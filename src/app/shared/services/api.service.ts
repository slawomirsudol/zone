import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public get(url: string, params?: any): Observable<any> {
    return this.http.get(url, params);
  }

  public post(url: string, params: any, data: any): Observable<any> {
    return this.http.post(url, params, data);
  }

}
