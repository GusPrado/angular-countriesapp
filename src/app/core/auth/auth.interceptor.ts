import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpErrorResponse} from "@angular/common/http";
import {HttpInterceptor} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../token/token.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  origReq: HttpRequest<any>

  constructor(
    public http: HttpClient,
    private tokenService: TokenService,
    private router: Router
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.tokenService.getToken()
    if (token) {
      console.log('req:', req)
    }

    return next.handle(req)
          .pipe(catchError(err => {
            console.log('disparou erro', err)

            if (err instanceof HttpErrorResponse && err.status === 401){
              console.log('executar token refresh')
              this.origReq = req
              this.tokenService
                .renewToken()
                .subscribe(res => {
                  console.log(res)
                  if (!res) {
                    console.log('sem retorno API')
                  } else {
                    console.log('reenviando req:', this.origReq)
                    //next.handle(this.origReq)
                    this.router.navigate(['/country'])
                  }
                })
            }

            return throwError(err)
          }))

  }
}



