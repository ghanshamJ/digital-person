
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Person } from 'src/app/shared/models/Person';
import { AgePipe } from 'src/app/shared/pipes/age.pipe';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css']
})
export class CustomListComponent implements OnInit {
  @Input() persons: Person[];
  date = new Date(3737837873);
  constructor(private router: Router){}
  ngOnInit() {
  }
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  selectedPerson:Person;
  showPersonDetail(person:Person):void{
    this.display = true;
    this.selectedPerson = person;
  }
  display: boolean = false;

}