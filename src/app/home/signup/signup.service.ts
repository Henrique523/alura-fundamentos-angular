import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INewUser} from "../../interfaces/INewUser";

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) {}

  checkUserNameTaken(userName: String) {
    return this.http.get(API_URL + "/user/exists/" + userName);
  }

  signup(newUser: INewUser) {
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
