import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private _opened: boolean = true;
  private _toggleSidebar(){
    console.log("klik");
    this._opened = !this._opened;
  }
  constructor() { }

  ngOnInit() {
  }

}
