import {HttpClient, HttpParams} from "@angular/common/http";
import IPhoto from "../../interfaces/IPhoto";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  constructor(private http: HttpClient) {
  }

  listFromUserPaginated(username: string, page: number): Observable<IPhoto[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<IPhoto[]>(`${API_URL}/${username}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {

    const formData = new FormData();

    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${API_URL}/photos/upload`, formData);
  }
}
