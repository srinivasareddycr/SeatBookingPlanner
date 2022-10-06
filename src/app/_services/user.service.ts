import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { Observable,catchError,retry,throwError } from 'rxjs';
//import { HttpClie,nt, HttpHeaders } from '@angular/common/http';
//import { catchError,  } from 'rxjs';
import Booking from 'src/Entity/Booking';
import {  Observable,  throwError } from 'rxjs';

const API_URL = 'http://localhost:8081/sbp/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// httpOptions: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; observe: "events"; context?: HttpContext | undefined; params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined; reportProgress?: boolean | undefined; responseType?: "json" | undefined; withCredentials?: boolean | undefined; };
  constructor(private http: HttpClient) { }

  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'text' });
  // }

  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'testuser', { responseType: 'text' });
  // }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'test', { responseType: 'text' });
  // }

  getPatientDetailsByName(patientName:string){
    return this.http.get(API_URL+ 'retrieve/'+patientName);
  }

  getAllBookings(){
    return this.http.get(API_URL+'getAllBooking');
  }


  updatePatientDetails(patients:any,id:number){
    return this.http.put(API_URL+'updatepatient/'+id,patients);
  }

  updateBookingDetails(booking:any)
  {
    return this.http.put(API_URL+'updateBooking',booking);
  }

  cancelBookingDetails(booking:any)
  {
    return this.http.put(API_URL+'cancelBooking',booking);
  }


  bookSeat(booking:Booking): Observable<Booking>{
return this.http.post<Booking>(API_URL+'emp/booking',JSON.stringify(booking),this.httpOptions)


  }

  getBookbyBookingId(id: number) {
    return this.http.get(API_URL + id);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  

}

// Error handling 

