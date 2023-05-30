import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
//nosotros
import { LaEscuelaUrsiGallettiComponent } from './nosotros/la-escuela-ursi-galletti/la-escuela-ursi-galletti.component';
import { AcercaDeUrsiGallettiComponent } from './nosotros/acerca-de-ursi-galletti/acerca-de-ursi-galletti.component';
import { AspectoDocenteComponent } from './nosotros/aspecto-docente/aspecto-docente.component';
import { AspectoLaboralComponent } from './nosotros/aspecto-laboral/aspecto-laboral.component';
import { CoordinacionCulturalComponent } from './nosotros/coordinacion-cultural/coordinacion-cultural.component';
import { EsposicionesColectivasComponent } from './nosotros/esposiciones-colectivas/esposiciones-colectivas.component';
import { EsposicionesIndividualesComponent } from './nosotros/esposiciones-individuales/esposiciones-individuales.component';

//cursos
import { CronogramaDeCursosComponent } from './cursos/cronograma-de-cursos/cronograma-de-cursos.component';
import { CursosDeOrfebreriaComponent } from './cursos/cursos-de-orfebreria/cursos-de-orfebreria.component';
import { CursoOnlineDeOrfebriaEnVivoComponent } from './cursos/curso-online-de-orfebria-en-vivo/curso-online-de-orfebria-en-vivo.component';

//blog
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { PostByCategoryComponent } from './blog/post-by-category/post-by-category.component';

//servicios
import { HerramientasComponent } from './servicios/herramientas/herramientas.component';
import { ServiciosComponent } from './servicios/servicios.component';

//modulos
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './useraccount/perfil/perfil.component';
import { PaymentDetailsComponent } from './useraccount/payment-details/payment-details.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnillosComponent } from './galleries/anillos/anillos.component';
import { AretesComponent } from './galleries/aretes/aretes.component';
import { DijesComponent } from './galleries/dijes/dijes.component';
import { EscuelaComponent } from './galleries/escuela/escuela.component';
import { ExpocafComponent } from './galleries/expocaf/expocaf.component';
import { JoyasComponent } from './galleries/joyas/joyas.component';
import { PublicacionComponent } from './galleries/publicacion/publicacion.component';
import { PulserasComponent } from './galleries/pulseras/pulseras.component';
import { CursoComponent } from './cursos/curso/curso.component';

// pluggins
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
// import {InfiniteScrollModule} from 'ngx-infinite-scroll';
// angular file uploader
import { AngularFileUploaderModule } from 'angular-file-uploader';

@NgModule({
  declarations: [
    HomeComponent,
    LaEscuelaUrsiGallettiComponent,
    AcercaDeUrsiGallettiComponent,
    CronogramaDeCursosComponent,
    CursosDeOrfebreriaComponent,
    CursoOnlineDeOrfebriaEnVivoComponent,
    BlogDetailComponent,
    AspectoDocenteComponent,
    AspectoLaboralComponent,
    CoordinacionCulturalComponent,
    EsposicionesColectivasComponent,
    EsposicionesIndividualesComponent,
    PostByCategoryComponent,
    HerramientasComponent,
    ServiciosComponent,
    PerfilComponent,
    PaymentDetailsComponent,
    ContactComponent,
    AnillosComponent,
    AretesComponent,
    DijesComponent,
    EscuelaComponent,
    ExpocafComponent,
    JoyasComponent,
    PublicacionComponent,
    PulserasComponent,
    CursoComponent
  ],
  exports: [
    HomeComponent,
    HomeComponent,
    LaEscuelaUrsiGallettiComponent,
    AcercaDeUrsiGallettiComponent,
    CronogramaDeCursosComponent,
    CursosDeOrfebreriaComponent,
    CursoOnlineDeOrfebriaEnVivoComponent,
    BlogDetailComponent,
    AspectoDocenteComponent,
    AspectoLaboralComponent,
    CoordinacionCulturalComponent,
    EsposicionesColectivasComponent,
    EsposicionesIndividualesComponent,
    PostByCategoryComponent,
    HerramientasComponent,
    ServiciosComponent,
    PerfilComponent,
    PaymentDetailsComponent,
    ContactComponent,
    AnillosComponent,
    AretesComponent,
    DijesComponent,
    EscuelaComponent,
    ExpocafComponent,
    JoyasComponent,
    PublicacionComponent,
    PulserasComponent,
    CursoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    ShareButtonsModule,
    ShareIconsModule,
    // InfiniteScrollModule,
    NgxPaginationModule,
    AngularFileUploaderModule
  ]
})
export class PagesModule { }
