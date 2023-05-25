import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom, Observable } from 'rxjs';
import { DataDto } from '../models/data.dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = `${environment.url}`;

  constructor(
    private http: HttpClient,
    ) { }

  get<T extends DataDto>(route: string, params?: Map<string,any>): Promise<T> {
    const url = `${this.baseURL}${route}`;
    return firstValueFrom(this.http.get<T>(url, {
      headers: this.getHeaders(),
      params: this.getParams(params?? new Map<string,any>())
    }))
    .catch(err => this.handleError(err));
  }

  post<T extends DataDto, M extends DataDto>(route: string, data: T): Promise<M> {
    const url = `${this.baseURL}${route}`;
    return firstValueFrom(this.http.post<M>(url, data, {headers: this.getHeaders()}))
           .catch(err => this.handleError(err));
  }

  getHeaders = (): HttpHeaders => new HttpHeaders()
    .set('content-type', 'application/json');

  getParams(parameters: Map<string,any>): HttpParams{
    let params = new HttpParams();
    for (let [key, value] of parameters) {
      if(value != null && value != undefined)
      params = params.set(key, value);
    }
    params = params.set('apikey', environment.apiKey);

    return params;
  }

  public handleError(error: any): Promise<never> {
    return Promise.reject(null);
  }
}
