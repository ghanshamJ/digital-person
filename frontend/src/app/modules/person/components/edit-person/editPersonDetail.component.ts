import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { AuthService } from "src/app/core/services/auth.service";
import { PersonService } from "src/app/core/services/person.service";
import { URL } from "src/app/core/Url";
import { Country } from "src/app/shared/models/Country";
import { Person } from "src/app/shared/models/Person";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-edit-person-detail",
  templateUrl: "editPersonDetail.component.html",
  styleUrls: ["editPersonDetail.component.css"],
})
export class EditPersonDetailComponent implements OnInit {
  @Input() person: Person;
  fileToUpload: File;
  options: any;
  countries: Country[];
  name: string;
  email: string;
  selectedCountry: string;
  address: string;
  birthDate: Date;
  errorMsg: string = "";
  imgUrl: string;
  imageToShow: any;
  isFirst: boolean = true;
  constructor(
    public personService: PersonService,
    private router: Router,
    private url: URL
  ) {
    this.person = this.router.getCurrentNavigation().extras.state;
    if (!this.person) {
      this.router.navigate(["persons-list"]);
    }
  }
  ngOnInit(): void {
    this.imgUrl = this.url.imageURL;
    this.countries = this.personService.getCountries();
    this.setImage(this.person);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.isFirst) {
      this.setImage(this.person);
      this.isFirst = false;
    }
  }

  setImage(person: Person): void {
    if(this.isFirst){
    this.personService.getImage(person._id).then((res) => {
      if (res) {
        this.imageToShow = res;
      }
    });
  }
  }

  updatePerson(): void {
    const fd = new FormData();
    fd.append("image", this.fileToUpload);
    fd.append("name", this.person.name);
    fd.append("email", this.person.email);
    fd.append("dob", this.person.dob.toString());
    fd.append("address", this.person.address);
    fd.append("country", this.person.country);
    this.personService.updatePerson(this.person._id, fd).subscribe((res) => {
      this.setImage(this.person);
      alert("Person data updated" );
    });
  }
  handleFileInput(e: Event) {
    console.log(e);
    this.fileToUpload = e.target["files"].item(0);
    console.log(this.fileToUpload);
  }
}
