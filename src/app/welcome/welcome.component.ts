import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private _opened: boolean = true;
  private _toggleSidebar(){
    console.log("klik");
    this._opened = !this._opened;
  }
  constructor() { }

  ngOnInit() {

  }




}
