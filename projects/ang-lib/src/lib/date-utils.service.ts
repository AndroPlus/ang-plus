import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  private date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

  constructor() { }

  /**
   * Is Date validate or not (format example: MM/DD/YYYY )
   * @param dateString 
   * @returns 
   */
  public isValidDate(dateString: string): boolean {
    if(this.date_regex.test(dateString)) return true; 
    else return false;
  }
}
