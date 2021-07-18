import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router) {}
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      this.router.navigate(['login']);
      return false;
    }
  }
}
