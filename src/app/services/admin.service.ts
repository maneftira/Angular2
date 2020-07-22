import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Event } from '../models/event';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }
  addevent(formdata: FormData): Observable<any> {
    return this.http.post("http://localhost:8080/Events/Add/UpcomingEvent", formdata);

  }
  getAbstract() {
    return this.http.get("http://localhost:8080/getAbstract/");

  }
  deleteAbstract(id: number) {
    console.log("http://localhost:8080/deleteAbstract" + "/" + id)
    return this.http.delete("http://localhost:8080/deleteAbstract" + "/" + id);

  }
  GetSponsors() {
    return this.http.get("http://localhost:8080/getSponsor/")

  }
  GetExhibitors() {
    return this.http.get("http://localhost:8080/getExhibitors/")

  }
  deleteSponsor(id: number) {
    return this.http.delete("http://localhost:8080/deleteSponsor" + "/" + id)

  }
  deleteExhibitor(id: number) {
    return this.http.delete("http://localhost:8080/deleteExhibitor" + "/" + id)

  }
  addLogo(id: number, formdata: FormData) {
    return this.http.put("http://localhost:8080/AddLogo/" + id, formdata);
  }
  addAreaPlan(id: number, formdata: FormData) {
    return this.http.put("http://localhost:8080/Events/area/" + id, formdata);
  }

  addatmfpresident(id: number, e: Event) {
    return this.http.put("http://localhost:8080/AddAtmfPresident/" + id, e);

  }
  addCongresspresident(id: number, e: Event) {
    return this.http.put("http://localhost:8080/AddCongressPresident/" + id, e);

  }
  Addhotel(id: number, data) {
    return this.http.put("http://localhost:8080/Addhotel/" + id, data);

  }
  addArticle(data) {
    return this.http.post("http://localhost:8080/addArticle", data);
  }

  deleteArticle(id: number) {
    return this.http.delete("http://localhost:8080/deleteArticle" + "/" + id)

  }

  getNewArticle() {
    return this.http.get<any>("http://localhost:8080/newArticle");

  }
  getAllArticles() {
    return this.http.get<any>("http://localhost:8080/articles");
  }



}
