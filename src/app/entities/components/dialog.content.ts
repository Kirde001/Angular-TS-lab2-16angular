import { FormControl } from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ICinema } from "../interfaces/app.interface";

@Component({
    selector: 'dialog-content',
    templateUrl: 'dialog.content.html',
    styleUrls: ['dialog.content.scss'],
  })
  export class DialogContent{

    cinemaForm: FormGroup;
    
    constructor(
        private readonly fb: FormBuilder,
        private readonly dialogRef: MatDialogRef<DialogContent>,
        @Inject(MAT_DIALOG_DATA) public data: ICinema,
    )   {
        this.cinemaForm = this.fb.group({
            filmName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZА-Яа-яЁё ]*')] ),
            cinemaHall: new FormControl('', Validators.required),
            date: new FormControl(data.date, Validators.required),
            city: new FormControl('', Validators.required),
            tel: new FormControl('', [Validators.required, Validators.pattern(/\d+/)]),
    });
    }
  
    getToday(): string {
      return new Date().toISOString().split('T')[0];
    }
  
    onOkClick(): void {
        if (this.cinemaForm.valid) {
          this.dialogRef.close(this.cinemaForm.value);
        }
      }
    
    onNoClick(): void {
        this.dialogRef.close();
    }
}