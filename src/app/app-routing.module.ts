import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcercaDeUrsiGallettiComponent } from './pages/nosotros/acerca-de-ursi-galletti/acerca-de-ursi-galletti.component';
import { CronogramaDeCursosComponent } from './pages/cursos/cronograma-de-cursos/cronograma-de-cursos.component';
import { CursosDeOrfebreriaComponent } from './pages/cursos/cursos-de-orfebreria/cursos-de-orfebreria.component';
import { CursoOnlineDeOrfebriaEnVivoComponent } from './pages/cursos/curso-online-de-orfebria-en-vivo/curso-online-de-orfebria-en-vivo.component';
import { LaEscuelaUrsiGallettiComponent } from './pages/nosotros/la-escuela-ursi-galletti/la-escuela-ursi-galletti.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { EsposicionesIndividualesComponent } from './pages/nosotros/esposiciones-individuales/esposiciones-individuales.component';
import { EsposicionesColectivasComponent } from './pages/nosotros/esposiciones-colectivas/esposiciones-colectivas.component';
import { CoordinacionCulturalComponent } from './pages/nosotros/coordinacion-cultural/coordinacion-cultural.component';
import { AspectoLaboralComponent } from './pages/nosotros/aspecto-laboral/aspecto-laboral.component';
import { AspectoDocenteComponent } from './pages/nosotros/aspecto-docente/aspecto-docente.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PostByCategoryComponent } from './pages/blog/post-by-category/post-by-category.component';
import { HerramientasComponent } from './pages/servicios/herramientas/herramientas.component';
import { LoginComponent } from './auth/login/login.component';
import { PerfilComponent } from './pages/useraccount/perfil/perfil.component';
import { PaymentDetailsComponent } from './pages/useraccount/payment-details/payment-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnillosComponent } from './pages/galleries/anillos/anillos.component';
import { AretesComponent } from './pages/galleries/aretes/aretes.component';
import { DijesComponent } from './pages/galleries/dijes/dijes.component';
import { EscuelaComponent } from './pages/galleries/escuela/escuela.component';
import { ExpocafComponent } from './pages/galleries/expocaf/expocaf.component';
import { JoyasComponent } from './pages/galleries/joyas/joyas.component';
import { PublicacionComponent } from './pages/galleries/publicacion/publicacion.component';
import { PulserasComponent } from './pages/galleries/pulseras/pulseras.component';
import { CursoComponent } from './pages/cursos/curso/curso.component';
import { PasswordresetComponent } from './auth/passwordreset/passwordreset.component';
import { NewpasswordComponent } from './auth/newpassword/newpassword.component';
import { RegistroComponent } from './auth/registro/registro.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //quienessomos
  { path: 'la-escuela-ursi-galletti', component: LaEscuelaUrsiGallettiComponent },
  { path: 'acerca-de-ursi-galletti', component: AcercaDeUrsiGallettiComponent },
  { path: 'aspecto-docente', component: AspectoDocenteComponent },
  { path: 'aspecto-laboral', component: AspectoLaboralComponent },
  { path: 'coordinacion-cultural', component: CoordinacionCulturalComponent },
  { path: 'exposiciones-colectivas', component: EsposicionesColectivasComponent },
  { path: 'exposiciones-individuales', component: EsposicionesIndividualesComponent },
  //servicios
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/:name', component: ServiciosComponent },
  { path: 'herramientas', component: HerramientasComponent },

  //galleries
  { path: 'anillos', component: AnillosComponent },
  { path: 'aretes', component: AretesComponent },
  { path: 'dijes', component: DijesComponent },
  { path: 'escuela-y-ursi-galletti', component: EscuelaComponent },
  { path: 'expo-caf', component: ExpocafComponent },
  { path: 'joyas-de-la-gran-pantalla', component: JoyasComponent },
  { path: 'publicaciones', component: PublicacionComponent },
  { path: 'pulseras', component: PulserasComponent },
  //cursos
  { path: 'cronograma-de-cursos', component: CronogramaDeCursosComponent },
  { path: 'cursos-de-orfebreria', component: CursosDeOrfebreriaComponent },
  { path: 'curso-online-de-orfebria-en-vivo', component: CursoOnlineDeOrfebriaEnVivoComponent },
  { path: 'curso/:slug', component: CursoComponent },
  //blog
  { path: 'blog/:slug', component: BlogDetailComponent },
  { path: 'blog/category/:name', component: PostByCategoryComponent },
  //user
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'user-account', component: PerfilComponent },
  { path: 'user-account/:id', component: PerfilComponent },
  { path: 'user-account/payment-detail/:id', component: PaymentDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'password-reset', component: PasswordresetComponent },
  { path: 'change-password', component: NewpasswordComponent },
  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
