import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompaniesService } from '../../companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[] = [];

  constructor(
    private service: CompaniesService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getCompanies()
    .subscribe( response => this.companies = response);
  }

  newCompany(){
    this.router.navigate(['/company-form']);
  }

}
