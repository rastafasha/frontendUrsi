import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user:User;
  userprofile:User;
  profile:Profile;
  error:string;
  p: number = 1;
  count: number = 8;

  perfilForm: FormGroup;
  passwordForm: FormGroup;
  profileSeleccionado: Profile;
  public formSumitted = false;
  id: number | null;
  pageTitle: string;
  errors:any = null;
  infoProfile: any;

  public storage = environment.apiUrlMedia;
  public afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg, .png, .gif, .jpeg',
    method: 'POST',
    maxSize: '2',
    uploadAPI: {
      url: environment.apiUrl + '/profile/upload',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.accountService.headers

      },
      responseType: 'json',
    },
    theme: 'dragNDrop',
    selectFileBtn: 'Select Files',
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Seleccionar imagen',
      resetBtn: 'Resetear',
      uploadBtn: 'Subir',
      dragNDropBox: 'Arrastre y suelte aquí',
      attachPinBtn: 'Seleccionar una imagen',
      afterUploadMsg_success: 'Se cargó correctamente el archivo !',
      afterUploadMsg_error: 'Se produjo un error al subir el archivo!',
      sizeLimit: 'Límite de tamaño 2 Megas'
    }
  };

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private fb: FormBuilder,
  ) {
    this.user = userService.user;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getUser();
    // this.getUserServer();
    this.activatedRoute.params.subscribe( ({id}) => this.getUserServer(id));

  }

  getUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.user.id;

  }

  getUserServer(id:number){
    this.userService.getUserById(id).subscribe(
      res =>{
        this.userprofile = res[0];
        error => this.error = error
        // console.log(this.userprofile);
      }
    );

    // this.activatedRoute.params.subscribe( ({id}) => this.iniciarFormularioPassword(id));
    if (!id == null || !id == undefined || id) {
      this.activatedRoute.params.subscribe( ({id}) => this.iniciarFormularioPerfil(id));

    }
  }


  iniciarFormularioPerfil(id:number){
    if (!id == null || !id == undefined || id) {
      // let id = this.directory.id;
      this.pageTitle = 'Editar Perfil';
      this.userService.getUserById(+id).subscribe(
        res => {
          this.perfilForm.patchValue({
            id: res.id,
            nombre: this.userprofile.profiles.nombre,
            surname: this.userprofile.profiles.surname,
            direccion: this.userprofile.profiles.direccion,
            pais: this.userprofile.profiles.pais,
            estado: this.userprofile.profiles.estado,
            telhome: this.userprofile.profiles.telhome,
            telmovil: this.userprofile.profiles.telmovil,
            facebook: this.userprofile.profiles.facebook,
            instagram: this.userprofile.profiles.instagram,
            twitter: this.userprofile.profiles.twitter,
            linkedin: this.userprofile.profiles.linkedin,
            user_id: res.user_id,
            status: res.status,
          });
          this.profileSeleccionado = res;
          console.log(this.profileSeleccionado);

        }
      );
    } else {
      this.pageTitle = 'Crear Perfil';
    }


    this.validarFormularioPerfil();
  }

  validarFormularioPerfil(){
    this.perfilForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      surname: ['', Validators.required],
      pais: [''],
      estado: [''],
      telhome: ['', Validators.required],
      telmovil: [''],
      facebook: [''],
      instagram: [''],
      twitter: [''],
      linkedin: [''],
      image: [''],
      user_id: [this.user.id],
      status: ['PENDING'],
    });
  }

  avatarUpload(datos) {
    const data = JSON.parse(datos.response);
    this.perfilForm.controls['image'].setValue(data.image);//almaceno el nombre de la imagen
  }

  deleteFotoPerfil(){
    this.profileService.deleteFoto(this.perfilForm.value['id']).subscribe(response => {
      Swal.fire(response['msg']['summary'], response['msg']['detail'], 'success');
      this.ngOnInit();
    }, error => {
      Swal.fire('Error al eliminar', 'Intente de nuevo', 'error');
    });
  }

  get nombre() { return this.perfilForm.get('nombre'); }
  get surname() { return this.perfilForm.get('surname'); }
  get pais() { return this.perfilForm.get('pais'); }
  get estado() { return this.perfilForm.get('estado'); }
  get telhome() { return this.perfilForm.get('telhome'); }
  get telmovil() { return this.perfilForm.get('telmovil'); }
  get facebook() { return this.perfilForm.get('facebook'); }
  get instagram() { return this.perfilForm.get('instagram'); }
  get twitter() { return this.perfilForm.get('twitter'); }
  get linkedin() { return this.perfilForm.get('linkedin'); }
  get user_id() { return this.perfilForm.get('user_id'); }
  get image() { return this.perfilForm.get('image'); }
  get status() { return this.perfilForm.get('status'); }


  guardarPerfil() {

    const formData = new FormData();
    formData.append('name', this.perfilForm.get('name')?.value);
    formData.append('surname', this.perfilForm.get('surname')?.value);
    formData.append('pais', this.perfilForm.get('pais')?.value);
    formData.append('estado', this.perfilForm.get('estado')?.value);
    formData.append('telhome', this.perfilForm.get('telhome')?.value);
    formData.append('telmovil', this.perfilForm.get('telmovil')?.value);
    formData.append('facebook', this.perfilForm.get('facebook')?.value);
    formData.append('instagram', this.perfilForm.get('instagram')?.value);
    formData.append('twitter', this.perfilForm.get('twitter')?.value);
    formData.append('linkedin', this.perfilForm.get('linkedin')?.value);
    formData.append('image', this.perfilForm.get('image').value);
    formData.append('user_id', this.perfilForm.get('user_id').value);
    formData.append('status', 'PENDING');

    const id = this.userprofile.id;


    if (id) {
      const data = {
        ...this.perfilForm.value,
        user_id: this.user.id,
        status: 'PENDING'
      }
      this.profileService.updateProfile(data, +id).subscribe(
        res => {
          this.infoProfile = res;
            Swal.fire('Guardado', 'Los cambios fueron actualizados', 'success');
            this.ngOnInit();
        },
        error => this.errors = error
      );
    } else {
      const data = {
        ...this.perfilForm.value,
        user_id: this.user.id,
      }
      this.profileService.createProfile(data).subscribe(
        res => {
          this.infoProfile = res;
            Swal.fire('Guardado', 'Los cambios fueron creados', 'success');
            this.ngOnInit();
        },
        error => this.errors = error
      );
    }
    return false;
  }


   //Cambiar contraseña

iniciarFormularioPassword(id:number){
  // const id = this.route.snapshot.paramMap.get('id');
  if (!id == null || !id == undefined || id) {

    this.userService.getUserById(id).subscribe(
      res => {
        this.passwordForm.patchValue({
          id: res.id,
          email: res.email,
        });
      }
    );
  } else {
    this.pageTitle = 'Crear Directorio';
  }
  this.validarFormularioPassword();

}

validarFormularioPassword(){
  this.passwordForm = this.fb.group({
    id: [''],
    email: ['', Validators.required],
    password: ['', Validators.required],
  password2: ['', Validators.required],
  }, {
    validators: this.passwordsIguales('password', 'password2')

  });
}

passwordNoValido(){
  const pass1 = this.passwordForm.get('password').value;
  const pass2 = this.passwordForm.get('password2').value;

  if((pass1 !== pass2) && this.formSumitted){
    return true;
  }else{
    return false;
  }
}

passwordsIguales(pass1Name: string, pass2Name: string){
  return (formGroup: FormGroup) =>{
    const pass1Control = formGroup.get(pass1Name);
    const pass2Control = formGroup.get(pass2Name);

    if(pass1Control.value === pass2Control.value){
      pass2Control.setErrors(null)
    }else{
      pass2Control.setErrors({noEsIgual: true});
    }
  }
}

cambiarPassword(){
  this.formSumitted = true;
  const {name } = this.passwordForm.value;
    if(this.userprofile){
      //actualizar
      const data = {
        ...this.passwordForm.value,
        id: this.userprofile.id
      }
      this.accountService.resetPassword(data).subscribe(
        resp =>{
          Swal.fire('Cambiado', `${name}  Password Cambiado correctamente`, 'success');
        });
    }
  }



}
