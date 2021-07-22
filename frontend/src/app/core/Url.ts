import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class URL {
  readonly authURL = "https://person-apk.herokuapp.com/api/v1/auth";
  readonly addPersonURL = "https://person-apk.herokuapp.com/api/v1/person";
  readonly getPersonsURL = "https://person-apk.herokuapp.com/api/v1/persons";
  readonly getPersonCountByCountryURL = "https://person-apk.herokuapp.com/api/v1/statistics-by-country";
  readonly imageURL = "https://person-apk.herokuapp.com/api/v1/image/";
  readonly updatePersonURL = "https://person-apk.herokuapp.com/api/v1/person/";
  
  // readonly authURL = "http://localhost:3000/api/v1/auth";
  // readonly addPersonURL = "http://localhost:3000/api/v1/person";
  // readonly getPersonsURL = "http://localhost:3000/api/v1/persons";
  // readonly getPersonCountByCountryURL = "http://localhost:3000/api/v1/statistics-by-country";
  // readonly imageURL = "http://localhost:3000/api/v1/image/";
  // readonly updatePersonURL = "http://localhost:3000/api/v1/person/";

}
