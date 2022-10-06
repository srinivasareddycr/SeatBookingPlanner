import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { AllBookngsComponent } from './all-bookngs/all-bookngs.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
//import { BoardUserComponent } from './board-user/board-user.component';

//import { BoardAdminComponent } from './board-admin/board-admin.component';
//import { RetrieveComponent } from './retrieve/retrieve.component';
//import { AllPatientsComponent } from './all-patients/all-patients.component';
//import { UpdateComponent } from './update/update.component';
//import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  //{ path: 'user', component: BoardUserComponent },
  { path: 'cancel', component: CancelBookingComponent },
  {path: 'bookid', component:GetByIdComponent},
 {path: 'getAll', component:AllBookngsComponent},
  {path: 'update', component:UpdateBookingComponent},
 {path: 'book', component:BookingComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
