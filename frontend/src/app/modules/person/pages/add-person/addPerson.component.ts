import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/services/person.service';
import { Person } from 'src/app/shared/models/Person';

@Component({
  selector: 'app-add-person',
  templateUrl:'addPerson.component.html',
  styles: [
  ]
})
export class AddPersonComponent implements OnInit {
  constructor(private personService: PersonService) { }
  ngOnInit(): void {
  }

  addPerson():void{
    const person = new Person();
    this.personService.addPerson(person).subscribe(res=>{
      alert("new Person added");
    })
  }
}
