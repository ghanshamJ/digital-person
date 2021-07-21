import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class URL {
  readonly authURL = "https://person-apk.herokuapp.com/api/v1/auth";
  readonly authURL2 = "https://person-apk.herokuapp.com/auth";
  readonly addPersonURL = "https://person-apk.herokuapp.com/api/v1/person";
  readonly getPersonsURL = "https://person-apk.herokuapp.com/api/v1/persons";
  readonly getPersonCountByCountryURL = "https://person-apk.herokuapp.com/api/v1/statistics-by-country";
}
