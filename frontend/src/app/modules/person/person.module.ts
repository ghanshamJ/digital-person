import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
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

