import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ICinema } from '../interfaces/app.interface';
/**
 * @service {cinemaFormService}
 * @description для создание реактивных форм
 */
@Injectable({ providedIn: 'root' })
export class cinemaFormService {
  constructor(private readonly _formBuilder: FormBuilder) {}
  /**
   * @method createCinemaForm
   * @description создание форм группы
   * @param {ICinema} [data] - начальная дата из основного компонента
   * @returns {FormGroup} возвращает форм группу
   */
  public createCinemaForm(data?: ICinema): FormGroup {
    return this._formBuilder.group({
      filmName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-ZА-Яа-яЁё ]*'),
      ]),
      cinemaHall: new FormControl('', Validators.required),
      date: new FormControl(data.date, Validators.required),
      city: new FormControl('', Validators.required),
      tel: new FormControl('', [Validators.required]),
    });
  }
}
