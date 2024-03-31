/**
 *  Интрефейс кино, универсальный интерфейс
 *
 * @param { string } filmName - название фильма
 * @param { string } cinemaHall - название зала
 * @param { Date } date - дата показа
 * @param { string } city - город показа
 * @param { string } tel - служебный телефон
 */

export interface ICinema {
  filmName: string;
  cinemaHall: string;
  date: Date;
  city: string;
  tel: string;
}
