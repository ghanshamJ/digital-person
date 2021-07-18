import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PersonService } from 'src/app/core/services/person.service';
import { Person } from 'src/app/shared/models/Person';

@Component({
  selector: 'app-person-list',
  templateUrl:'PersonList.component.html',
  styleUrls:['PersonList.component.css']
})
export class PersonListComponent implements OnInit {
  persons:Person[]=[];
  constructor(private personService: PersonService) { }
  ngOnInit(): void {
    this.getPersons();
  }

  addPerson():void{
    const person = new Person();
    this.personService.addPerson(person).subscribe(res=>{
      alert("new Person added");
    })
  }

  getPersons():void{
    this.personService.getPersons({}).subscribe(res=>{
      this.persons = res;
    })
  }

}
