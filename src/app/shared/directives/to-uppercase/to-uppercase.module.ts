import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToUppercaseDirective } from './to-uppercase.directive';

@NgModule({
  declarations: [ToUppercaseDirective],
  exports: [ToUppercaseDirective],
  imports: [CommonModule]
})
export class toUppercaseModule{}
