import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompaniesListComponent} from './companies-list/companies-list.component'

const routes: Routes = [
  { path: 'company-form' , component: CompanyFormComponent },
  { path: 'company-form/:id' , component: CompanyFormComponent },
  { path: 'companies-list' , component: CompaniesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
