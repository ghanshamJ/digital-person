import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "src/app/shared/models/Country";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private countryMap: Map<string, Country> = new Map();

  constructor(private httpService: HttpService) {}
  addPerson(reqParam: any): Observable<any> {
    return this.httpService.addPerson(reqParam);
  }
  updatePerson(id: any, reqParm: any): Observable<any> {
    return this.httpService.updatePerson(id,reqParm);
  }
  getPersons(reqParam: any): Observable<any> {
    return this.httpService.getPersons(reqParam);
  }
  getPersonCountByCountry() {
    return this.httpService.getPersonCountByCountry();
  }
  getCountriesHttp(): Observable<Country[]> {
    return this.httpService.getCountries();
  }
  setCountries(): void {
    this.getCountriesHttp().subscribe((res) => {
      res.forEach((country) => {
        this.countryMap.set(country.country_code, country);
        //this.countryMap.set(country.name, country);
      });
    });
  }
  getCountries(): Country[] {
    return Array.from(this.countryMap.values());
  }
  getCountry(countryCode: string): Country {
    return this.countryMap.get(countryCode);
  }
}
