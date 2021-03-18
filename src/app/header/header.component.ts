import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public header: any;
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.header = this.getHeader();
  }

  getHeader(){
    return this.config.getConfig().header;
  }

}
