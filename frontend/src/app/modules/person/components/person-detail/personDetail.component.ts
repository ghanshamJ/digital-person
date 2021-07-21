import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PersonService } from "src/app/core/services/person.service";
import { Country } from "src/app/shared/models/Country";
import { Person } from "src/app/shared/models/Person";

@Component({
  selector: "app-person-detail",
  templateUrl: "personDetail.component.html",
  styleUrls: ["personDetail.component.css"],
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;
  options: any;
  overlays: any[];
  infoWindow: any;
  country: Country;
  constructor(private personService: PersonService, private router: Router) {
    this.person = this.router.getCurrentNavigation().extras.state;
    if (!this.person) {
      this.router.navigate(["persons-list"]);
    }
  }
  ngOnInit() {
    this.country = this.personService.getCountry(this.person.country);
    this.initMap();
  }
  ngOnChanges(person: Person) {
    this.initMap();
  }
  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;
    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent("" + title + "");
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());
    }
  }
  initMap(): void {
    this.country = this.personService.getCountry(this.person.country);
    this.options = {
      center: { lat: this.country.latlng[0], lng: this.country.latlng[1] },
      zoom: 2.5,
    };
    this.overlays = [
      new google.maps.Marker({
        position: {
          lat: this.country.latlng[0],
          lng: this.country.latlng[1],
        },
        title: this.country.name,
      }),
    ];
    this.infoWindow = new google.maps.InfoWindow();
  }
}
