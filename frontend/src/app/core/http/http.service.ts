import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "src/app/shared/models/Person";
import { URL } from "../Url";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient, private url: URL) {}
  private contentHeader = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  login(reqParm: any): Observable<any> {
    return this.http.post<any>(this.url.authURL, reqParm, {
      headers: this.contentHeader,
    });
  }
  addPerson(reqParm: Person): Observable<any> {
    return this.http.post<any>(this.url.addPersonURL, reqParm, {
      headers: this.contentHeader,
    });
  }

  getPersons(reqParm: Person): Observable<any> {
    return this.http.get<any>(this.url.getPersonsURL, {
      headers: this.contentHeader,
    });
  }
}
