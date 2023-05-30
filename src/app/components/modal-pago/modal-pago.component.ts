import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  styleUrls: ['./modal-pago.component.css']
})
export class ModalPagoComponent implements OnInit{
  @Input() amount;
  @Input() items;
  @Input() reference;
  @Input() email_address;
  @Input() name;
  @Input() surname;
  @Input() status;

  @Input() product: Curso;

  public PaymentRegisterForm: FormGroup;
  paymentSeleccionado:Payment;
  curso:Curso;
  pagopaypal;
  user:User;

  constructor(
    public activeModal:NgbActiveModal,
    public router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private cursoService: CursosService,
  ) {
    this.user = userService.user
  }

  ngOnInit(): void {
    this.getUser();
    // this.getCurso();
    this.procesarPagoPaypal(
      this.reference, 
      this.email_address, 
      this.name, 
      this.surname, 
      this.amount, 
      this.items,
      );
  }

  closeModal(): void{
    this.activeModal.dismiss('Cross click');
    this.router.navigateByUrl('/user-account');
  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getCurso(){
    this.cursoService.getCurso(this.curso.id).subscribe(
      res =>{
        this.curso = res;
        console.log(this.curso);
      }
    );

  }


  procesarPagoPaypal(
    reference: any, 
    email: any, 
    name:any,
    surname:any,
    amount: any,
    items:any,

   ){debugger
   //crear

   let datos = {
     referencia: reference,
     email: this.email_address,    
     nombre: this.surname,
     name: this.items[0].name,
     curso_id: 1,
     user_id: this.user.id,
     monto: amount,
   }
   if(datos){
     this.paymentService.create(datos)
     .subscribe( (resp: any) =>{
       this.pagopaypal = resp;
       console.log(this.pagopaypal)
     })
   }

 }


}
