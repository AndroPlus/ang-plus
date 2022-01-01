import { Component } from '@angular/core';
import { DateUtilsService } from 'projects/ang-lib/src/lib/date-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-plus-showcase';

  constructor(private dateutils: DateUtilsService) {
    this.title = ''+dateutils.isValidDate('11/11/2001');
  }
}
