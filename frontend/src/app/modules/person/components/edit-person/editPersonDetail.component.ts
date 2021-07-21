import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { AuthService } from "src/app/core/services/auth.service";
import { PersonService } from "src/app/core/services/person.service";
import { Country } from "src/app/shared/models/Country";
import { Person } from "src/app/shared/models/Person";

@Component({
  selector: "app-edit-person-detail",
  templateUrl: "editPersonDetail.component.html",
  styles: [],
})
export class EditPersonDetailComponent implements OnInit {
  @Input() person: Person;
  options: any;
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
}
