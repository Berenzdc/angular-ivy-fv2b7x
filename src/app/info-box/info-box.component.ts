import { Component, OnInit } from '@angular/core';



import  {verfahren} from '../verfahren';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent {
verfahren = verfahren;


}