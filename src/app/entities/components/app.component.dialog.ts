import { FormControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ICinema } from "../interfaces/app.interface";

@Component({
    selector: 'app-component-dialog',
    templateUrl: 'app.component.dialog.html',
    styleUrls: ['app.component.dialog.scss'],
  })
  export class DialogContent{

    cinemaForm: FormGroup;
    
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogContent>,
        @Inject(MAT_DIALOG_DATA) public data: ICinema,
    )   {
        this.cinemaForm = this.fb.group({
            filmName: new FormControl('', Validators.required),
            cinemaHall: new FormControl('', Validators.required),
            date: new FormControl(data.date),
            city: new FormControl('', Validators.required),
            tel: new FormControl('', [Validators.required, Validators.pattern(/\d+/)]),
    });
    }
  
    getToday(): string {
      return new Date().toISOString().split('T')[0];
    }
  
    onOkClick(): void {
        if (this.cinemaForm.valid) { // Check form validity before closing
            // const value = {
            //     filmName: this.cinemaForm.get('filmName').value,
            //     // ... other form control values
            //   };
          this.dialogRef.close(this.cinemaForm.value);
        }
      }
    
    onNoClick(): void {
        this.dialogRef.close();
    }
}