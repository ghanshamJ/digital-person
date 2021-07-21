import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedInUsersGuard } from 'src/app/core/gaurds/OnlyLoggedInUsersGuard';
import { PersonDetailComponent } from './components/person-detail/personDetail.component';
import { AddPersonComponent } from './pages/add-person/addPerson.component';
import { PersonListComponent } from './pages/person-list/personList.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {
    path: 'add-person',
    component: AddPersonComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'persons-list',
    component: PersonListComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: 'person-detail',
    component: PersonDetailComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {}
