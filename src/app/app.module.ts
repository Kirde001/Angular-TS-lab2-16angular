import { NgModule,CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose,MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NativeDateAdapter, MatNativeDateModule,MAT_DATE_LOCALE} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { provideNgxMask, NgxMaskDirective,NgxMaskPipe} from 'ngx-mask'
import { AppComponent} from './app.component';
import { DialogContent } from './entities/components/dialog.content';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import { FormsModule, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';


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
    MatButtonModule,  
    MatDatepickerModule, 
    MatSelectModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatNativeDateModule,
    NgxMaskDirective,
    NgxMaskPipe,
    DatePipe,

    MatTableModule,
    

    ReactiveFormsModule, 
    

  ],

  providers: [
    MatDialogTitle,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    NativeDateAdapter,
    MatDialog,

    Input,

    Validators, 
    FormControl, 

    provideNgxMask(),
    {provide: MAT_DATE_LOCALE, useValue: 'ru'}, 
  ],

  bootstrap: [
    AppComponent
  ],
  
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]

})
export class AppModule {}
