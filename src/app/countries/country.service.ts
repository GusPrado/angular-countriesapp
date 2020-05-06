import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../core/token/token.service';
import { Country } from './country';



const API_URL = 'http://localhost:8090'

@Injectable({ providedIn: 'root'})
export class CountryService{

  countryList: Country[] = []

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ){}

  listAll(){
    const authToken = this.tokenService.getToken()
    return this.http
      .get<Country[]>(`${API_URL}/pais/listar/?token=${authToken}`)
  }

  listOne(){}

  addCountry(){}

  deleteCountry(){}
}
