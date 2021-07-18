import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  constructor(private httpService: HttpService) {}
  addPerson(reqParam: any): Observable<any> {
    return this.httpService.addPerson(reqParam);
  }

  getPersons(reqParam: any): Observable<any> {
    return this.httpService.getPersons(reqParam);
  }
  getPersonCountByCountry() {
    return this.httpService.getPersonCountByCountry();
  }
  getCountries(): Observable<any>{
    return this.httpService.getCountries();
  }
}
