import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MountainsComponent } from './mountains/mountains.component';

import { MountainsProviderService } from '../providers/mountains-provider.service';
import { MountainProviderService } from '../providers/mountain-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    MountainsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [MountainsProviderService, MountainProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
