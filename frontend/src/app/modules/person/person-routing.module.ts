import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedInUsersGuard } from 'src/app/core/gaurds/OnlyLoggedInUsersGuard';
import { AddPersonComponent } from './pages/add-person/addPerson.component';

const routes: Routes = [
  {
    path: 'add-person',
    component: AddPersonComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {}
