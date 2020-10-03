import { ProvidersService } from './../../providers.service';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent implements OnInit {

  providers: Provider[] = [];

  constructor(private service: ProvidersService, private router: Router) {}

  ngOnInit(): void {
    this.service.getProviders().subscribe( response => this.providers = response);
  }

  newProvider(){
    this.router.navigate(['/provider-form']);
  }

}
