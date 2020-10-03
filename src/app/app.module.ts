
import { ProvidersModule } from './providers/providers.module';
import { CompaniesModule } from './companies/companies.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { CompaniesService } from './companies.service';
import { ProvidersService } from './providers.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    CompaniesModule,
    ProvidersModule
  ],
  providers: [
    CompaniesService,
    ProvidersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
