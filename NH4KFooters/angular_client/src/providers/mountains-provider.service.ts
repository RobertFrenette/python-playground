import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class MountainsProviderService {

  private _endpoint: string = 'http://127.0.0.1:3000?action=mountains&dataURL=/';

  constructor(private http: Http) {}

  getMountains(): Observable<any> {
    return this.http.get(this._endpoint)
      .map(res => <any[]>res.json());
  }
}
