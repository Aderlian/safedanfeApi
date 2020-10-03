import { Provider } from './providers/provider';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private http: HttpClient) { }

  save(provider: Provider): Observable<Provider>{
    return this.http.post<Provider>('http://localhost:8080/providers', provider);
  }

  update(provider: Provider): Observable<any> {
    return this.http.put<Provider>(`http://localhost:8080/providers/${provider.id}`, provider);
  }

  delete(provider: Provider) : Observable<any> {
    return this.http.delete<Provider>(`http://localhost:8080/providers/${provider.id}`);
  }

  getProvider(): Provider{
    let provider: Provider = new Provider();
    return provider;
  }

  getProviders(): Observable<Provider[]>{
    return this.http.get<Provider[]>('http://localhost:8080/providers');
  }

  getProviderById(id: number): Observable<Provider>{
    return this.http.get<any>(`http://localhost:8080/providers/${id}`);
    }
}
