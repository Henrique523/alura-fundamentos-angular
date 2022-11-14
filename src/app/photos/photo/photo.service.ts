import {HttpClient} from "@angular/common/http";
import IPhoto from "../../interfaces/IPhoto";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  constructor(private http: HttpClient) {
  }

  listFromUser(username: string): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(`http://localhost:3000/${username}/photos`);
  }
}
