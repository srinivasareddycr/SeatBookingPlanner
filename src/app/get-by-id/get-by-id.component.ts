import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Booking from 'src/Entity/Booking';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {

  booking: Booking[] = [];

  book={
    id:0,
	employeeId:"",
  officeAddress:"",
  floorNumber:"",
  seatNumber:"",
  bookingDate:"",
	 phoneNumber:"",
	 bookingSlot:"",
	 status:"",
	 role:"",
	 cancel:"",

  };
 

  getBookingById(id:number){
     const promise = this.userService.getBookbyBookingId(id);
     promise.subscribe(
       (response:any) => {
       this.booking.splice(0);
       console.log(response);
       this.booking = response as Booking[];
     },
     function(error) {
       console.log(error);
       alert("Something went wrong");
     })
  } 
  
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
