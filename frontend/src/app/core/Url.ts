import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class URL {
  readonly authURL = "http://localhost:3000/api/v1/auth";
  readonly authURL2 = "https://person-apk.herokuapp.com/auth";
  readonly addPersonURL = "http://localhost:3000/api/v1/person";
  readonly getPersonsURL = "http://localhost:3000/api/v1/persons";
  readonly getPersonCountByCountryURL = "http://localhost:3000/api/v1/statistics-by-country";
}
