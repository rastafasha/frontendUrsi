import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { EscapeHtmlPipe } from './keep-html.pipe';
import { SafePipe } from './safe.pipe';
import { SafeHtmlPipe } from './safehtml.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    EscapeHtmlPipe,
    SafePipe,
    SafeHtmlPipe
  ],
  exports: [
    ImagenPipe,
    EscapeHtmlPipe,
    SafePipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class PipesModule { }
