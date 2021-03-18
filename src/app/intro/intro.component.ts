import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  

  public intro: any;

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.intro = this.getIntro();
  }

  getIntro(){
    return this.config.getConfig().intro;
  }

}
