import {Injectable} from "@angular/core";

import {PhotoService} from "../photo/photo.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import IPhoto from "../../interfaces/IPhoto";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<IPhoto[]>>{

  constructor(private photoService: PhotoService) {}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhoto[]> {
    const userName = route.params['username'];

    return this.photoService.listFromUserPaginated(userName, 1);
  }
}
