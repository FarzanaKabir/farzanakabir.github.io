import { Injectable } from '@angular/core';
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = 'https://api.emamulandalib.me/?token=121da90325928dfdf29ed16dbee73659';
  constructor(private httpClient: HttpClient) { }

  public fetchData(){
    return this.httpClient.get(`${this.SERVER_URL}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
