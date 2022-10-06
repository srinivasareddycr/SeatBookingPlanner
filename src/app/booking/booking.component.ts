import { Component, OnInit } from '@angular/core';
import Booking from 'src/Entity/Booking';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  title = "Fill the below details :"
  
  //Student = null as any;
  // Booking
  // officeAddress = {
  //   floorNumber: "",
  //   seatNumber:"",
  //   bookingDate:"",
  //   phoneNumber: "",
  //   bookingSlot:"",
  //   status:"",
  //   role:"",
  //   cancel:""
  // }
  
  
  
  booking: Booking = new Booking();
  bookings: Booking[] = [];
  
  ngForm() {}
  
  
  save() {
  
    const observable = this.userService.bookSeat(this.booking);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        alert("Booking Done....!"+response);
        location.reload();
      },
      function(error){
        console.log(error);
        alert("Something went wrong, Please try again!");
      }   
   )
   
  }
  //  edit(student: any){
  //   this.editStudent = student;
  //  }
  
  // updateStudent(){
  //   this.studentService.updateStudents(this.student).subscribe(
  //     (response :any) => {
  //       console.log(response);
  //     },
  //     function(error){
  //       console.log(error);
  //       alert("Something went wrong, Please try again!");
  //     }
  //   )
  // }
  
    constructor(public userService: UserService) {
        
    }
     
  
    ngOnInit(): void {
      // const promise = this.studentService.getStudents();
      // promise.subscribe((response) => {
      // console.log(response);
      // this.students = response as Student[];
      // })
    }
   
  }
  


