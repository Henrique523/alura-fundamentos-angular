import {Injectable} from "@angular/core";
import {startWith, Subject} from "rxjs";
import {Loading} from "./loading-type";

@Injectable({ providedIn: 'root' })
export class LoadingService {

  loadingSubject: Subject<Loading> = new Subject<Loading>();

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(Loading.STOPPED));
  }

  start() {
    this.loadingSubject.next(Loading.LOADING)
  }

  stop() {
    this.loadingSubject.next(Loading.STOPPED);
  }
}
