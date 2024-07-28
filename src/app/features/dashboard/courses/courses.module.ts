import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { ClassesComponent } from './components/classes/classes.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDialogComponent,
    ClassesComponent,
  ],
  exports: [CoursesComponent],
  imports: [
    SharedModule,
    CommonModule,
  ]
})
export class CoursesModule { }