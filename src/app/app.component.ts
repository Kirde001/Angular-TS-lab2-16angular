import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


class Item{
  public FilmName: string;
  public CinemaHall: string;
  public Date: Date;
  public City: string;
  public Tel: string;

  constructor(FilmName: string, City: string, CinemaHall: string, Date:Date, Tel: string) {
      this.FilmName= FilmName;
      this.City = City;
      this.CinemaHall = CinemaHall;
      this.Date = Date;
      this.Tel = Tel;
  }
}

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','demo-tel'];


  // displayedColumns = ['item', 'cost'];
  // transactions: Transaction[] = [
  //   {item: 'Beach ball', cost: 4},
  //   {item: 'Towel', cost: 5},
  //   {item: 'Frisbee', cost: 2},
  //   {item: 'Sunscreen', cost: 4},
  //   {item: 'Cooler', cost: 25},
  //   {item: 'Swim suit', cost: 15},
  // ];



  public title: string = 'Лабораторная работа №2';

  constructor(public dialog: MatDialog) {}
  
  items: Item[] =[];
  addItem(FilmName: string, City: string, CinemaHall: string, Date: Date, Tel: string): void {
    this.items.push(new Item(FilmName, City, CinemaHall, Date, Tel));
}
  dataSource = this.items;


deleteItem(item: Item) {
  const index = this.items.findIndex((existingItem) => existingItem === item);
  if (index > -1) {
    this.items.splice(index, 1);
  }
}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContent,
      {
        height: '645px',
        width: '600px',
        data: {},
  }
  );

  dialogRef.afterClosed().subscribe((result: Item) => {
    if (result) {
      this.addItem(result.FilmName, result.City,result.CinemaHall,result.Date,result.Tel);
    }
  });
  }
}

@Component({
  selector: 'app-component-dialog',
  templateUrl: 'app.component.dialog.html',
  styleUrls: ['app.component.dialog.scss'],
})

export class DialogContent{
  isDisabled = true;

  checkFormValidity() {
    this.isDisabled = !(
      this.data.FilmName.trim() &&
      this.data.CinemaHall &&
      this.data.Date &&
      this.data.City.trim() &&
      this.data.Tel
    );
  }

  constructor(
    public dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
  ) {}

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  onOkClick(): void {
    this.dialogRef.close(new Item(this.data.FilmName, this.data.City, this.data.CinemaHall,this.data.Date,this.data.Tel));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
