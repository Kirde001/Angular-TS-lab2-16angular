import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatDialogModule} from '@angular/material/dialog';

import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
//import {provideNativeDateAdapter} from '@angular/material/core';
import {NativeDateAdapter, MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { provideNgxMask, NgxMaskDirective,NgxMaskPipe} from 'ngx-mask'


import { AppComponent, DialogContent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule,  
    MatDatepickerModule, 
    MatSelectModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatNativeDateModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],

  providers: [
    MatDialogTitle,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    NativeDateAdapter,
    MatDialog,
    provideNgxMask(),
  ],

  bootstrap: [
    AppComponent
  ],
  
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]

})
export class AppModule {}
