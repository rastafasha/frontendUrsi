import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MessageService } from '../../services/message.service';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Curso;
  public user: User;
  error:string;
  id:number;

  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private router: Router
    ) {
      this.user = userService.user;
    }

  ngOnInit(): void {
    this.getUser();
    this.getUserServer();
  }

  addToCart(): void{
    console.log('sending...')
    this.messageService.sendMessage(this.product);
  }

  getUserServer(){
    this.userService.getUserById(this.user.id).subscribe(
      res =>{
        this.user = res[0];
        error => this.error = error
        console.log(this.user);
      }
    );

  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.user.id;

  }


}
