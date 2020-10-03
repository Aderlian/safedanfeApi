
import { Component, OnInit } from '@angular/core';
import { ProvidersService } from './../../providers.service';
import { Provider } from '../provider';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit {

  provider: Provider;
  success = false;
  errors: string[];
  id: number;

  constructor(
    private service: ProvidersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.provider = new Provider();
    }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.service
        .getProviderById(this.id)
        .subscribe(
          response => this.provider = response,
          errprResponse => this.provider = new Provider()

        )}
    })
  }

  comeBackProvidersList(){
    this.router.navigate(['/providers-list']);
  }

  onSubmit(){

    this.service.save(this.provider).subscribe( response => {
      this.success = true;
      this.errors = null;
      this.provider = response;

    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    } );
  }

  updateProvider(){
    this.service.update(this.provider).subscribe( response => {
      this.success = true;
      this.errors = null;
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
    });
  }

  deliteProvider(){
    this.service.delete(this.provider).subscribe( response => {
      this.comeBackProvidersList();
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
    });
  }

}
