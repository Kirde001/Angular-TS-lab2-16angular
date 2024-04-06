import { Component, DestroyRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContent } from './entities/components/dialog.content';
import { ICinema } from './entities/interfaces/app.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  /**
   * Заголовок для страницы
   *
   * @public
   * @type {string}
   */
  public title: string = 'Лабораторная работа №2';
  /**
   * Массив объектов типа интерфейса
   *
   * @public
   * @type {ICinema[]}
   */
  public items: ICinema[] = [];
  /**
   * Объявление конструктора
   *
   * @param {MatDialog} dialog - диалоговский сервис
   * @param {_destroyRef} _destroyRef - отписка
   */
  constructor(
    private readonly dialog: MatDialog,
    private readonly _destroyRef: DestroyRef
  ) {}
  /**
   * Удаление ряда-элемента из таблицы
   *
   * @method
   * @param { ICinema } item - берем объект интерфейса как параметр item
   * @description создается константа индекс, который берет индекс удаляемого объекта через строгое сравнение,
   * затем по условию убираем эту строку через метод splice, начиная с нашего индекса
   * @public
   * @type { ICinema} - для existingItem
   */
  public deleteItem(item: ICinema) {
    const index = this.items.findIndex((existingItem) => existingItem === item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
  /**
   * Открытие поп-апа (или диалогового окна)
   *
   * @method
   * @public
   * @return { void }
   */
  public openDialog(): void {
    const initialData: ICinema = {
      filmName: '',
      city: '',
      cinemaHall: '',
      date: new Date(),
      tel: '',
    };

    const dialogRef = this.dialog.open(DialogContent, {
      height: '645px',
      width: '600px',
      data: initialData,
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((result: ICinema) => {
        if (result) {
          this.items.push(result);
        }
      });
  }
}
