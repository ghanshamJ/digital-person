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
  errorMsg: string = "";
  person: Person;
  userFile: any;
  constructor(public personService: PersonService, private router: Router) {
    this.person = new Person();
  }
  ngOnInit(): void {}
  fileToUpload: File | null = null;
  handleFileInput(e: Event) {
    console.log(e);
    this.fileToUpload = e.target["files"].item(0);
    console.log(this.fileToUpload);
  }
  addPerson(): void {
    const fd = new FormData();
    fd.append("image", this.fileToUpload);
    fd.append("name", this.person.name);
    fd.append("email", this.person.email);
    fd.append("dob", this.person.dob.toString());
    fd.append("address", this.person.address);
    fd.append("country", this.person.country);
    this.personService.addPerson(fd).subscribe((res) => {
      alert("new Person added");
    });
  }
}
