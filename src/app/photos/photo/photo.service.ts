import {HttpClient, HttpParams} from "@angular/common/http";
import IPhoto from "../../interfaces/IPhoto";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  constructor(private http: HttpClient) {
  }

  listFromUserPaginated(username: string, page: number): Observable<IPhoto[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<IPhoto[]>(`http://localhost:3000/${username}/photos`, { params });
  }
}
