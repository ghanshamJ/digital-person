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
    return this.httpService.updatePerson(id, reqParm);
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

  // getImage(id: string): Observable<any> {
  //   return this.httpService.getImage(id);
  // }

  async getImage(id): Promise<any> {
    const promise = new Promise((res, rej) => {
    this.httpService.getImage(id).subscribe(
       (data) => {
         this.createImageFromBlob(data, id).then(result=>{
          res(result)
         });
      },
      (error) => {
        console.log("Error occured", error);
      }
    );
    });
    return promise;
  }
  createImageFromBlob(image: Blob, id): Promise<any> {
    const promise = new Promise((res, rej) => {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          //this.imageToShow.set(id, reader.result);
          res(reader.result);
        },
        false
      );
      if (image) {
        reader.readAsDataURL(image);
      } else {
        //rej("error");
      }
    });
    return promise;
  }
}
