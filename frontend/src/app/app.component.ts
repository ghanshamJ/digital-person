import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PersonService } from './core/services/person.service';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig, private personService: PersonService) {}
}
