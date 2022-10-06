import { Component, OnInit } from '@angular/core';
import Booking from 'src/Entity/Booking';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-all-bookngs',
  templateUrl: './all-bookngs.component.html',
  styleUrls: ['./all-bookngs.component.css']
})
export class AllBookngsComponent implements OnInit {

  bookings: Booking = new Booking();
  baookingsArray: Booking[] = [];

  getAllBookings() {
    this.userService.getAllBookings().subscribe(
      (response : any) => {
        console.log(response);
        this.baookingsArray = response;
      },
      
      function(error: any){
        console.log(error);
        alert("You are not authorised to access the service ...!");
      }   
    );
  }

  

  constructor(public userService: UserService) {
    this.getAllBookings();
   }

  ngOnInit(): void {
    const promise = this.userService.getAllBookings();
    promise.subscribe((response) => {  
    console.log(response);
      this.baookingsArray = response as Booking[];
    })

  }
}
