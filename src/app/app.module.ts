import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
//import { BoardAdminComponent } from './board-admin/board-admin.component';

//import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BookingComponent } from './booking/booking.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { AllBookngsComponent } from './all-bookngs/all-bookngs.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
//import { RetrieveComponent } from './retrieve/retrieve.component';
//import { AllPatientsComponent } from './all-patients/all-patients.component';
//import { UpdateComponent } from './update/update.component';
//import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BookingComponent,
    GetByIdComponent,
    AllBookngsComponent,
    UpdateBookingComponent,
    CancelBookingComponent,
    //BoardAdminComponent,
    //BoardUserComponent,
   /// RetrieveComponent,
   // AllPatientsComponent,
   // UpdateComponent,
    //UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
