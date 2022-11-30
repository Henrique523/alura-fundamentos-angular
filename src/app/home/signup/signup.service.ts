import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {INewUser} from "../../interfaces/INewUser";
import {environment} from "../../../environments/environment";

const API_URL = environment.apiUrl;

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  checkUserNameTaken(userName: String) {
    return this.http.get(API_URL + "/user/exists/" + userName);
  }

  signup(newUser: INewUser) {
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
