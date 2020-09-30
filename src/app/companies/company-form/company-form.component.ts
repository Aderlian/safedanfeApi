import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Company } from '../company';
import { CompaniesService } from '../../companies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  company: Company;
  success = false;
  errors: string[];
  id: number;

  constructor(
    private service: CompaniesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.company = service.getCompany();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.service
        .getCompanyById(this.id)
        .subscribe(
          response => this.company = response,
          errprResponse => this.company = new Company()

        )}
    })
  }

  comeBackCompaniesList(){
    this.router.navigate(['/companies-list']);
  }

  onSubmit(){
    this.service.save(this.company).subscribe( response => {
      this.success = true;
      this.errors = null;
      this.company = response;

    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    } );
  }
  updateCompany(){
    this.service.update(this.company).subscribe( response => {
      this.success = true;
      this.errors = null;
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
    });
  }
  deliteCompany(){
    this.service.delete(this.company).subscribe( response => {
      this.comeBackCompaniesList();
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
    });
  }
}
