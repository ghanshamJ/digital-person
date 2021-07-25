import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { PersonService } from "./core/services/person.service";

import { MenuItem } from "primeng/api";
import { AuthService } from "./core/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  selected: string = "chart";
  constructor(
    private primengConfig: PrimeNGConfig,
    private personService: PersonService,
    public authService: AuthService,
    private router: Router
  ) {
    if (!this.authService.isAuthenticated) {
      router.navigate(["login"]);
    }
  }

  ngOnInit() {
    this.personService.setCountries();
  }
  logout() {
    if (this.authService.isAuthenticated) {
      this.authService.logout();
      this.router.navigate(["login"]);
    }
  }
}
