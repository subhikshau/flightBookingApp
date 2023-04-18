import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {UserLoginComponent} from './user-login/user-login.component'
import { UserSignupComponent } from './user-signup/user-signup.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {FlightDetailsComponent}from './flight-details/flight-details.component';
import {RemoveFlightComponent} from './remove-flight/remove-flight.component';
import {BgComponent} from './bg/bg.component';
import { UdashboardComponent } from './udashboard/udashboard.component';
import{UserLogoutComponent} from './user-logout/user-logout.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import {BookTableComponent} from './book-table/book-table.component'

const routes: Routes = [
 { path:'', component: HomeComponent },
 {
  path:'user-login',component:UserLoginComponent 
 },
 {
  path:'user-signup',component:UserSignupComponent 
 },
 {
  path:'dashboard',component:DashboardComponent
 },
 {
  path:'admin-login',component:AdminLoginComponent
 },
 {
  path:'flight-details',component:FlightDetailsComponent
 },
 {
  path:'remove-flight',component:RemoveFlightComponent
 },
 {
  path:'bg',component:BgComponent
 },
 {
  path:'udashboard',component:UdashboardComponent
 },
 {
  path:'user-logout',component:UserLogoutComponent
 },
 
 {
  path:'user-bookings',component:UserBookingsComponent
 },
 {
  path:'book-table',component:BookTableComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
