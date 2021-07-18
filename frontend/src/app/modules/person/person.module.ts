import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './pages/person-list/personList.component';
import { AddPersonComponent } from './pages/add-person/addPerson.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    CardModule,
    PersonRoutingModule
  ],
  exports: [],
  declarations: [PersonListComponent, AddPersonComponent],
  providers: []
})
export class PersonModule {}

