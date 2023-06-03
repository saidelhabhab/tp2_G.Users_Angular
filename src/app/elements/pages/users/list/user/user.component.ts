import { Component, OnInit } from '@angular/core';
import {userType} from 'src/app/types/users.type';
import {UsersService} from 'src/app/services/users.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  implements OnInit{
  sideNavStatus: boolean= false;
 

  public listeusers: userType[] = [];

  constructor(public usersService: UsersService) { }

  private getAlluser():void{
    this.usersService.getUsers().subscribe(user=>{
      console.log(user);
      this.listeusers=user;
      

    });
  }

  ngOnInit() {
    this.getAlluser();


  }
  deleteUser(userId: number) {
    // Call the user service method to delete the user
    this.usersService.deleteUser(userId).subscribe(
      () => {
        // Remove the deleted user from the local array
        this.listeusers = this.listeusers.filter(user => user.id !== userId);
      },
      error => {
        console.log('Error deleting user:', error);
      }
    );
  }
}
