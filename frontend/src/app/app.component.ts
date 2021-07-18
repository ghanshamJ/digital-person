import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { PersonService } from "./core/services/person.service";

import { MenuItem } from "primeng/api";
import { AuthService } from "./core/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(
    private primengConfig: PrimeNGConfig,
    private personService: PersonService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: "Person",
        icon: "pi pi-user",
        items: [
          {
            label: "Add new person",
            icon: "pi pi-plus",
            routerLink: "add-person",
          },
          {
            label: "Show Persons",
            icon: "pi pi-list",
            routerLink: "persons-list",
          },
        ],
      },
      {
        label: "Graph",
        icon: "pi pi-chart-bar",
        routerLink: "graph",
      },
      this.authService.isAuthenticated()
        ? {
            label: "Logout",
            icon: "pi pi-fw pi-power-off",
            command: () => {
              this.logout();
            },
          }
        : {
            label: "Login",
            icon: "pi pi-lock",
            routerLink: "login",
          },
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
