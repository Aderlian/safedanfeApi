import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';


@NgModule({
  declarations: [
    CompanyFormComponent,
    CompaniesListComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FormsModule
  ], exports: [
    CompanyFormComponent,
    CompaniesListComponent
  ]
})
export class CompaniesModule { }
