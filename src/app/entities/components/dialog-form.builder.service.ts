import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICinema } from '../interfaces/app.interface';

@Injectable({ providedIn: 'root' })
export class CinemaFormService {
  constructor(private readonly _fb: FormBuilder) {}

  public createCinemaForm(data?: ICinema): FormGroup {
    return this._fb.group({
      filmName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-ZА-Яа-яЁё ]*'),
      ]),
      cinemaHall: new FormControl('', Validators.required),
      date: new FormControl(data?.date || this.getToday(), Validators.required),
      city: new FormControl('', Validators.required),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/\d+/),
      ]),
    });
  }

  private getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
}