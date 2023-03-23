import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectToArrayPipe } from './objectToArray.pipe';

@NgModule({
  declarations: [ObjectToArrayPipe ],
  imports: [
    CommonModule
  ],
  entryComponents: [ObjectToArrayPipe ],
  exports: [ObjectToArrayPipe ]
})
export class PipesModule { }