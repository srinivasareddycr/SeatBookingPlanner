import { Component, OnInit } from '@angular/core';
import Booking from 'src/Entity/Booking';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  bookings: Booking = new Booking();
  bookingsArray: Booking[] = [];
  //id:number=0;
  content:any;
  
    constructor(public userService: UserService) { }
    
  
  
  
    updateBooking(st :any ,j:number)
    {
  
        this.bookings.id=st.id;
        console.log(st.id);
          this.bookings.bookingDate=st.bookingDate;
          console.log(st.bookingDate);
          this.bookings.bookingSlot=st.bookingSlot;
          console.log(st.bookingSlot);
         
          this.bookings.employeeId=st.employeeId;
          console.log(st.employeeId);
          this.bookings.floorNumber=st.floorNumber;
          console.log(st.floorNumber);
          this.bookings.officeAddress=st.officeAddress;
          console.log(st.officeAddress);
          this.bookings.seatNumber=st.seatNumber;
          console.log(st.seatNumber);

  
          
  
            }
  
            update(bookings : any)
            {
               console.log(bookings); 
              const observable=this.userService.updateBookingDetails(this.bookings);
              observable.subscribe(
                (response:any) => {
                console.log(response)
                alert("Student Updated");
                
               
                },
                function(error){
                  console.log(error);
                  alert("Something went wrong");        
                });
      
                window.location.reload();
                  
                }
          
  
      
  
    ngOnInit(): void {
      const promise = this.userService.getAllBookings();
      promise.subscribe((response) => {  
      console.log(response);
        this.bookingsArray = response as Booking[];
    });
   
    }
  
  
  }
