import { Component, VERSION } from '@angular/core';

import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
