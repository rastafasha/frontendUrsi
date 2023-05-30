import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { ModalPagoComponent } from './modal-pago/modal-pago.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PipesModule } from '../pipes/pipes.module';
import { BlogFeaturedComponent } from './blog-featured/blog-featured.component';
import { RouterModule } from '@angular/router';
import { DestacadosComponent } from './destacados/destacados.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    ModalProductoComponent,
    ModalPagoComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    BlogFeaturedComponent,
    DestacadosComponent
  ],
  exports: [
    ModalProductoComponent,
    ModalPagoComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    BlogFeaturedComponent,
    DestacadosComponent
  ],
  imports: [
    CommonModule,
    NgxPayPalModule,
    PipesModule,
    RouterModule,
    ShareButtonsModule,
    ShareIconsModule
  ]
})
export class ComponentsModule { }
