import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { BgComponent } from './bg/bg.component';
import { UdashboardComponent } from './udashboard/udashboard.component';
import { FilterflightComponent } from './filterflight/filterflight.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { BookTableComponent } from './book-table/book-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    UserLoginComponent,
    UserSignupComponent,
    DashboardComponent,
    AdminLoginComponent,
    FlightDetailsComponent,
    RemoveFlightComponent,
    BgComponent,
    UdashboardComponent,

    FilterflightComponent,
    UserLogoutComponent,
    UserBookingsComponent,
    BookTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
