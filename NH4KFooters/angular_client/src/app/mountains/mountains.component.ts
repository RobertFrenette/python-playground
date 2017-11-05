import { Component, OnInit } from '@angular/core';
import { MountainsProviderService } from '../../providers/mountains-provider.service';
import { MountainProviderService } from '../../providers/mountain-provider.service';
import { Mountain } from "../models/mountain";

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {
  private loadingMsg: string = 'Loading Mountain Data...';
  private mountains: Mountain[] = [];
  private hidden: string = 'hidden';
  private visible: string = 'visible';
  private mountainName : string = '';
  private mountainImgURL : string = '';
  private mountainData : string = '';

  constructor(private mountainsProvider: MountainsProviderService,
              private mountainProvider: MountainProviderService) { }

  ngOnInit() {
    this.getMountains();
  }

  getMountains(): void {
    this.mountainsProvider.getMountains().subscribe(data => {
      //console.log(data);
      let resp = JSON.parse(data);
      let mountainResp = resp['mountains'];

      if (mountainResp.length == 0) {
        this.loadingMsg = 'Unable to load Mountain Data.';
      } else {
        for (let mountain of mountainResp) {
          this.mountains.push(new Mountain(mountain['mountainName'],
            mountain['mountainElevation'],
            mountain['mountainEffort'],
            mountain['mountainURL'],
            mountain['mountainPic']));
        };

        this.visible = 'hidden';
        this.hidden = 'visible';
      }
    })
  }

  getMountain(mtn): void {;
    this.mountainName = '';
    this.mountainImgURL = '';
    this.mountainData = 'Loading data for ' + mtn['mountainName'] + '...';

    this.mountainProvider.getMountain(mtn.mountainURL).subscribe(data => {
      //console.log(data);
      let resp = JSON.parse(data);
      let mountain = resp['mountain'][0];
      let mountainDesc = mountain.mountainDesc;

      if (mountainDesc == 'Sorry, we could not find the page you were looking for.') {
        this.mountainData = 'Unable to load data for ' + mtn.mountainName + '.';
      } else {
        this.mountainName = mtn.mountainName;
        this.mountainImgURL = mtn.mountainPic;
        this.mountainData = mountainDesc;
      }
    });
  }
}
