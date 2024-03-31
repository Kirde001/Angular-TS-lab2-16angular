import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICinema } from '../interfaces/app.interface';

import { CinemaFormService } from './dialog-form.builder.service';

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog.content.html',
  styleUrls: ['dialog.content.scss'],
})
export class DialogContent {
  public cinemaForm: FormGroup;

  constructor(
    private readonly _formBuilder: CinemaFormService,
    private readonly _dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: ICinema
  ) {
    this.cinemaForm = this._formBuilder.createCinemaForm(data);
  }

  public getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  public onOkClick(): void {
    if (this.cinemaForm.valid) {
      this._dialogRef.close(this.cinemaForm.value);
    }
  }

  public onNoClick(): void {
    this._dialogRef.close();
  }
}
