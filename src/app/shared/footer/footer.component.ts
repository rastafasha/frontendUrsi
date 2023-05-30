import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { SubcripcionService } from 'src/app/services/subcripcion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  email = new FormControl();
  submitted = false;
  error = null;
  errors:any = null;
  year: number = new Date().getFullYear();

   // Registro
   public formSumitted = false;
   public registerForm = this.fb.group({
     id: [''],
     email: [ '', [Validators.required] ]

   });
   // Registro

   constructor(
    private fb: FormBuilder,
    private subcripcionService: SubcripcionService,
  ) {

  }

  username: FormControl<any>;
  ngOnInit(){

  }

  crearUsuario(){
    this.formSumitted = true;
    if(this.registerForm.invalid){
      return;
    }
    // console.log(this.registerForm.value);

    this.subcripcionService.crearUsuario(this.registerForm.value).subscribe(
      resp =>{
        Swal.fire('Registrado!', `Gracias por Seguirnos!`, 'success');
      },(error) => {
        Swal.fire('Error', error.error.msg, 'error');
        this.errors = error.error;
      }
    );

  }

}
