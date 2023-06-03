import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HttpUsersListResponse, userType } from '../types/users.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url='https://reqres.in/api/users';
  constructor(protected http: HttpClient) { }
  public perPage=6;
 /* getUsers(page:Number): Observable<userType[]> {
    return (this.http.get(`${this.url}/users?page=${page}&perPage=${this.perPage}`)) as Observable<userType[]>;
  } */
  public getUsers(): Observable<userType[]> {
    return this.http.get<HttpUsersListResponse>(this.url).pipe(
      map(response => response.data) // Accéder au tableau de données "data"
    );
  }
  
  deleteUser(userId: number): Observable<void> {
    const url = `${this.url}/${userId}`;
    return this.http.delete<void>(url);
  }
}
