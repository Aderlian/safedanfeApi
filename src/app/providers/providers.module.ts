import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';


@NgModule({
  declarations: [ProviderFormComponent, ProvidersListComponent],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    FormsModule

  ], exports: [
    ProviderFormComponent
  ]
})
export class ProvidersModule { }
