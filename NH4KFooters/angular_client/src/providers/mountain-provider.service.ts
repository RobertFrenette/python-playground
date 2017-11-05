import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class MountainProviderService {

  private endpoint: string = 'http://127.0.0.1:3000?action=mountain&dataURL=';

  constructor(private http: Http) {}

  getMountain(mountainURL: String): Observable<any> {
    return this.http.get(this.endpoint + mountainURL)
      .map(res => <any[]>res.json());
  }

}
