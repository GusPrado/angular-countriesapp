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
      .get<Country[]>(`${API_URL}/pais/listar?token=${authToken}`)
  }

  listOne(country){
    const authToken = this.tokenService.getToken()
    return this.http
      .get<Country>(`${API_URL}/pais/pesquisar?filtro=${country}&token=${authToken}`)
  }

  addCountry(country: string, abbr: string, gentile: string){
    const authToken = this.tokenService.getToken()
    return this.http
      .post(`${API_URL}/pais/salvar?token=${authToken}`,
      {
        nome: country,
        sigla: abbr,
        gentilico: gentile
      }
      )
  }

  deleteCountry(id: number){
    const authToken = this.tokenService.getToken()
    return this.http.get(`${API_URL}/pais/excluir?id=${id}&token=${authToken}`)
  }
}
