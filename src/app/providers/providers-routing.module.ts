import { ProviderFormComponent } from './provider-form/provider-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersListComponent } from './providers-list/providers-list.component';


const routes: Routes = [
  {path: 'provider-form' , component: ProviderFormComponent},
  {path: 'provider-form/:id' , component: ProviderFormComponent},
  {path: 'providers-list' , component: ProvidersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }

