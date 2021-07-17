import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PersonComponent } from './pages/person.component';
import { PersonRoutingModule } from './person-routing.module';
@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PersonRoutingModule
  ],
  exports: [PersonComponent],
  declarations: [PersonComponent],
  providers: []
})
export class PersonModule {}

