import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { PersonService } from "src/app/core/services/person.service";
import { Country } from "src/app/shared/models/Country";
import { Person } from "src/app/shared/models/Person";

@Component({
  selector: "app-add-person",
  templateUrl: "addPerson.component.html",
  styles: [],
})
export class AddPersonComponent implements OnInit {
  countries: Country[];
  name: string;
  email: string;
  selectedCountry: string;
  address: string;
  birthDate: Date;
  errorMsg: string = "";
  constructor(private personService: PersonService, private router: Router) {}
  ngOnInit(): void {
    this.countries = this.personService.getCountries();
  }
  addPerson(): void {
    const person = new Person();
    person.name = this.name;
    person.email = this.email;
    person.address = this.address;
    person.country = this.selectedCountry;
    person.dob = this.birthDate;
    this.personService.addPerson(person).subscribe((res) => {
      alert("new Person added");
    });
  }
}
