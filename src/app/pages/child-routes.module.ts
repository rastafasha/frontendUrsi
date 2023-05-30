import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages




const childRoutes: Routes = [

    // { path: '',  component: DashboardComponent, data:{title:'Dashboard'} },
    // //auth

    // //configuraciones
    // { path: 'configuraciones',  component: ConfiguracionesComponent, data:{title:'Configuraciones'} },

    // { path: 'rolesconf', component: RolesViewComponent, data:{title:'Planes'} },

    // { path: 'planes', component: PlanesIndexComponent, data:{title:'Planes'} },
    // { path: 'plan/:id', component: PlanComponent, data:{title:'Plan'} },
    // { path: 'planes/create', component: PlanesEditComponent, data:{title:'Crear Plan'} },
    // { path: 'plan/edit/:id', component: PlanesEditComponent, data:{title:'Editar Plan'} },
    // { path: 'planes/all', component: PlanesPageComponent, data:{title:'Planes'} },
    // { path: 'planes/plan', component: PlanComponent, data:{title:'Planes'} },

    // { path: 'currencies', component: CurrenciesIndexComponent, data:{title:'Monedas'} },
    // { path: 'currency/:id', component: CurrenciesIndexComponent, data:{title:'Moneda'} },
    // { path: 'currencies/create', component: CurrenciesEditComponent, data:{title:'Crear Moneda'} },
    // { path: 'currency/edit/:id', component: CurrenciesEditComponent, data:{title:'Editar Moneda'} },
    // //admin
    // { path: 'payments',   component: PaymentsComponent, data:{title:'Pagos'} },
    // { path: 'payment-detail/:id', component: PaymentDetailsComponent, data:{title:'Detalle Pago'} },
    // { path: 'payment/edit/:id', component: PaymentEditComponent, data:{title:'Editar Pago'} },
    // { path: 'factura/:id', component: ReciboFacturaComponent, data:{title:'Buscar'} },
    // { path: 'realizar-pago', component: ReportarPagoComponent, data:{title:'Relizar Pago'} },
    // //user
    // { path: 'users', component: UsersComponent, data:{title:'Usuarios'} },
    // { path: 'user/:id', component: UserProfileComponent, data:{title:'Detalle Usuario'} },
    // { path: 'user/edit/:id', component: UserProfileComponent, data:{title:'Editar Usuario'} },
    // // { path: 'user/edit/:id', component: UserDetailsComponent, data:{title:'Editar Usuario'} },
    // { path: 'historial-pagos', component: UserHistorialpagosComponent, data:{title:'Historial Pagos'} },
    // { path: 'profile/:id',  component: ProfileComponent, data:{title:'Perfil'} },

    // { path: 'search/:searchItem', component: UsersComponent, data:{title:'Buscar'} },
    // { path: 'help', component: HelpComponent, data:{title:'Ayuda'} },
    // { path: 'contact', component: ContactComponent, data:{title:'Contacto'} },


    // { path: '', redirectTo: 'admin', pathMatch: 'full' },
    // { path: '**', component:  DashboardComponent },





]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoute),
    RouterModule.forChild(childRoutes),
  ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
