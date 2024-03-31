import { FormGroup} from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICinema } from '../interfaces/app.interface';
import { cinemaFormService } from './dialog-form.builder.service';
@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog.content.html',
  styleUrls: ['dialog.content.scss'],
})
export class DialogContent {
  public cinemaForm: FormGroup;
  /**
   * Конструкто для диалогового окна
   * 
   * @constructor
   * @param {cinemaFormService} _formBuilder
   * @param {MatDialogRef<DialogContent>} _dialogRef
   * @param {ICinema} data
   */
  constructor(
    private readonly _formBuilder: cinemaFormService,
    private readonly _dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: ICinema
  ) {
    this.cinemaForm = this._formBuilder.createCinemaForm(data);
  }
  /**
   * Получение сегодняшней даты в строке
   * 
   * @method getToday
   * @returns {string} сегодняшняя дата в формате стринги без T
   */
  public getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
  /**
   * Отвечает за сохранение введенных данных
   * 
   * @method onOkClick
   * @return { void }
   * @description отправка затем в основной компонент value с нашим объектом, дальнейшие операции там
   */
  public onOkClick(): void {
    if (this.cinemaForm.valid) {
      this._dialogRef.close(this.cinemaForm.value);
    }
  }
  /**
   * Кнопка отмены, закрытие диалога
   * 
   * @method onNoClick
   * @description закрытие диалога БЕЗ каких-либо действий
   */
  public onNoClick(): void {
    this._dialogRef.close();
  }
}
