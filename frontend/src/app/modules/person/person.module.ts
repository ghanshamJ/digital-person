import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './pages/person-list/personList.component';
import { AddPersonComponent } from './pages/add-person/addPerson.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { CustomListComponent } from './components/custom-card/custom-list.component';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
@NgModule({
  imports: [
    DataViewModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    CardModule,
    PersonRoutingModule,
    DropdownModule,
    RatingModule
  ],
  exports: [],
  declarations: [PersonListComponent, AddPersonComponent, CustomListComponent],
  providers: [],
  
})
export class PersonModule {}

