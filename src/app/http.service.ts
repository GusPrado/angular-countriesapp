import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpClientModule } from '@angular/common/http'
import { Country } from '../app/country/country'
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api: string = 'http://localhost:8090'
  token: string
  result: string

  constructor(
    private http: HttpClient,
    public router: Router
    ) { }

  renewTokenTime() {
    if (localStorage.getItem('access_token')) {
      this.token = localStorage.getItem('access_token')
      this.http.get(`${this.api}//usuario/renovar-ticket?token=${this.token}`).subscribe(data => {
        this.result = JSON.stringify(data)
        console.log('token renewed?', this.result)
      })
    }
    return
  }

  countriesList() {

    this.renewTokenTime()
    return this.http.get(`${this.api}/pais/listar?token=${this.token}`)
  }

  handleAdd(country: Country) {

    this.renewTokenTime()
    if (this.result === 'true') {
      return this.http.post(`${this.api}/pais/salvar?token=${this.token}`, country)
                      .subscribe((res: any) => {
                        if (res.id) {
                          this.router.navigate(['/home'])
                        }
                      })
    }

  }

  handleDelete(id){
    //console.log(id, this.token)
    this.renewTokenTime()
    if (this.result === 'true') {
      return this.http.get(`${this.api}/pais/excluir?id=${id}&token=${this.token}`)
                      .subscribe((res: any) => {
                        console.log('deleted?', res)
                        this.router.navigate(['/home'])
                      })
    }


  }

  handleLogout() {
    localStorage.clear()
    return this.router.navigate(['/login'])
  }

  handleError(error: HttpErrorResponse) {
    if(error.status === 401){
      console.log('token expirou')
    }
  }
}
