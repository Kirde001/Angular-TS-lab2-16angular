import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContent } from './entities/components/app.component.dialog';
import { ICinema } from './entities/interfaces/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public title: string = 'Лабораторная работа №2';

  public items: ICinema[] =[];

  constructor(public dialog: MatDialog) {}

  deleteItem(item: ICinema) {
    const index = this.items.findIndex((existingItem) => existingItem === item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  openDialog(): void {
    const initialData: ICinema = {
      filmName: '',
      city: '',
      cinemaHall: '',
      date: new Date(), 
      tel: ''
    };
    const dialogRef = this.dialog.open(DialogContent,
      {
        height: '645px',
        width: '600px',
        data: initialData,
      }
    );
    dialogRef.afterClosed().subscribe((result: ICinema) => {
      if (result) {
        this.items.push(result);
      }
    });
  }
}

