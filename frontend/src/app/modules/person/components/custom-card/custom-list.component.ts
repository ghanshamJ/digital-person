import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { NavigationStart, Router } from "@angular/router";
import { SelectItem } from "primeng/api";
import { PersonService } from "src/app/core/services/person.service";
import { Person } from "src/app/shared/models/Person";
import { AgePipe } from "src/app/shared/pipes/age.pipe";
import { URL } from "../../../../core/Url";

@Component({
  selector: "app-custom-list",
  templateUrl: "./custom-list.component.html",
  styleUrls: ["./custom-list.component.css"],
})
export class CustomListComponent implements OnInit {
  @Input() persons: Person[];
  imageToShow = new Map();
  constructor(
    private personService: PersonService,
    private router: Router,
    public url: URL
  ) {
    console.log(this.persons);
  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    for (const person of this.persons) {
      this.personService.getImage(person._id).then(res=>{
        this.imageToShow.set(person._id,res);
      });
    }
  }
  showPersonDetail(person: Person): void {
    this.router.navigate(["../person-detail"], { state: person });
  }
  editPersonDetail(person: Person): void {
    this.router.navigate(["../edit-person-detail"], { state: person });
  }
}
