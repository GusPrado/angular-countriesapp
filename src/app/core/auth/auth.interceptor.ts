import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpErrorResponse} from "@angular/common/http";
import {HttpInterceptor} from "@angular/common/http";
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
      public http: HttpClient,
      private tokenService: TokenService
      ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req
        let token = this.tokenService.getToken()
        if (token) {
          console.log('req:', req)
        }

        return next.handle(req)
          .pipe(catchError(err => {
            console.log(err);
            if (err instanceof HttpErrorResponse && err.status === 401) {

              console.log('executar token refresh e prosseguir')
              this.tokenService
                .renewToken()
                .subscribe( res => {
                  next.handle(request)
                })

              //TODO: Token refreshing
              } else {
                  //Logout from account or do some other stuff

              return Observable.throw(err)
              //return Observable.throw(err)
            }
          }))
    }
}
