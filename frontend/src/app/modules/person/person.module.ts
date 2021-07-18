import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonRoutingModule } from "./person-routing.module";
import { PersonListComponent } from "./pages/person-list/personList.component";
import { AddPersonComponent } from "./pages/add-person/addPerson.component";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { CustomListComponent } from "./components/custom-card/custom-list.component";
import { DataViewModule } from "primeng/dataview";
import { DropdownModule } from "primeng/dropdown";
import { RatingModule } from "primeng/rating";
import { StatisticsComponent } from "./pages/statistics/statistics.component";
import {ChartModule} from 'primeng/chart';
import { AgePipe } from "src/app/shared/pipes/age.pipe";
import {CalendarModule} from 'primeng/calendar';
import { PersonDetailComponent } from "./components/person-detail/personDetail.component";
import {GMapModule} from 'primeng/gmap';
import {DialogModule} from 'primeng/dialog';
import { AgmCoreModule } from "@agm/core";
import {ToastModule} from 'primeng/toast';
import { MessageService } from "primeng/api";
@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHeh1wumeggNpcv4_wpm44r6yerv5sLSw'
    }),
    DialogModule,
    ToastModule,
    GMapModule,
    CalendarModule,
    ChartModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    CardModule,
    PersonRoutingModule,
    DropdownModule,
    RatingModule,
  ],
  exports: [],
  declarations: [
    AgePipe,
    PersonListComponent,
    AddPersonComponent,
    CustomListComponent,
    StatisticsComponent,
    PersonDetailComponent,
  ],
  providers: [MessageService],
})
export class PersonModule {}
