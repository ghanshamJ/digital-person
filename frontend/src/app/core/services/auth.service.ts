import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService) { }
  login(reqParam: any):Observable<any>{
      return this.httpService.login(reqParam);
  }
}

