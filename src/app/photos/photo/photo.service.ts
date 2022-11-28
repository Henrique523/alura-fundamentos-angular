import {HttpClient, HttpParams} from "@angular/common/http";
import IPhoto from "../../interfaces/IPhoto";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {IPhotoComment} from "../../interfaces/IPhotoComment";

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

  findById(id: string) {
    return this.http.get<IPhoto>(`${API_URL}/photos/${id}`);
  }

  getComments(photoId: number) {
    return this.http.get<IPhotoComment[]>(`${API_URL}/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(`${API_URL}/photos/${photoId}/comments`, { commentText });
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API_URL}/photos/${photoId}`);
  }
}
