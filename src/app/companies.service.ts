import { Company } from './companies/company';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor( private http: HttpClient) { }

  save(company: Company) : Observable<Company> {
    return this.http.post<Company>('http://localhost:8080/companys', company);
  }

  update(company: Company) : Observable<any> {
    return this.http.put<Company>(`http://localhost:8080/companys/${company.id}`, company);
  }
  delete(company: Company) : Observable<any> {
    return this.http.delete<Company>(`http://localhost:8080/companys/${company.id}`);
  }

  getCompany() : Company {
   let company : Company = new Company();
   return company
  }

  getCompanies() : Observable<Company[]>{
    return this.http.get<Company[]>('http://localhost:8080/companys');
  }

  getCompanyById(id: number): Observable<Company>{
  return this.http.get<any>(`http://localhost:8080/companys/${id}`);
  }
}
