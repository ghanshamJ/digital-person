import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { AgePipe } from './shared/pipes/age.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PersonService } from './core/services/person.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonModule } from './modules/person/person.module';
import { AuthModule } from './modules/auth/auth.module';
import { MenubarModule } from "primeng/menubar";

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/http/interceptor';
import { OnlyLoggedInUsersGuard } from './core/gaurds/OnlyLoggedInUsersGuard';
@NgModule({
  declarations: [
    AppComponent,
    AgePipe
    
  ],
  imports: [
    MenubarModule,
    AuthModule,
    PersonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    OnlyLoggedInUsersGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
