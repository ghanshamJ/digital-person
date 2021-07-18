import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpService: HttpService) {}
  login(reqParam: any): Observable<any> {
    return this.httpService.login(reqParam);
  }
  logout(){
    localStorage.setItem("token","");
  }
  public getToken(): any {
    return localStorage.getItem("token");
  }
  public setToken(accessToken: any): any {
    return localStorage.setItem("token", accessToken);
  }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    } else {
      const isExpired = helper.isTokenExpired(token);
      return !isExpired;
    }
  }
}
