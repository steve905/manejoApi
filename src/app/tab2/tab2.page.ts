import { Component, OnInit } from '@angular/core';
import { CountryService } from '../api/country.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  paises: any[] = [];
  errorMensage = '';
  filtro: any[] = [];
  filteredProducts: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(){
    this.countryService.obtenerPaises().subscribe(
        paises => {
          this.paises = paises;
        },  err => this.errorMensage = err as any
      );
      console.log(this.paises)
  }

}
