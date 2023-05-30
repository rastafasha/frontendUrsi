import { Component, OnInit } from '@angular/core';
import { ServicioTitle } from 'src/app/models/serviciotitle';
import { ServiciosService } from '../../services/servicios.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  servicetitles: ServicioTitle;
  public user: User;
  error:string;
  id: any;
  userprofile: User;
  profile: Profile;

  constructor(
    private userService: UserService,
    private accountService: AccountService,
  ){
    this.user = userService.user;
  }

  ngOnInit(): void {
    this.getUser();
    this.getUserServer();
  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
      this.id = this.user.id;
  }

  getUserServer(){
    this.userService.getUserById(this.user.id).subscribe(
      res =>{
        this.user = res[0];
        error => this.error = error
        // console.log(this.user);
      }
    );

  }


  logout(): void {
    this.accountService.logout();
  }


}
