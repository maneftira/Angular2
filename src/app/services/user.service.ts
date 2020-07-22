import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { map } from "rxjs/operators"
import { Event } from '../models/event';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 


  }
  getUpcomingevents(){
    return this.http.get("http://localhost:8080/Events/UpcomingEvent");

  }
  getPassedevents(){
    return this.http.get<Event[]>("http://localhost:8080/Events/PassedEvents");

  }

  downloadPDF(id:number): any {
    return this.http.get("http://localhost:8080/Events"+"/"+id, { responseType: 'blob' })
    .pipe(map(res => {
      return new Blob([res], { type: 'application/pdf', });
  }));
}
  downloadLogo(id:number): any {
    return this.http.get("http://localhost:8080/Logo"+"/"+id, { responseType: 'blob' })
    .pipe(map(res => {
      return new Blob([res], { type: 'image/JPEG' });
  }));
}
downloadAreaPlan(id:number): any {
    return this.http.get("http://localhost:8080/AreaPlan"+"/"+ id, { responseType: 'blob' })
    .pipe(map(res => {
      return new Blob([res], { type: 'image/JPEG' });
      
  }));
}
addAbstract(data,id){
  return this.http.post("http://localhost:8080/addAbstract"+"/"+id,data);

}
AddSponsor(data,id){
  return this.http.post("http://localhost:8080/addSponsor"+"/"+id,data)
 
}
AddExhibitor(data,id){
  return this.http.post("http://localhost:8080/addExhibitor"+"/"+id,data)
 
}
Contact(data){
  return this.http.post("http://localhost:8080/contact",data)
 

}
getHotels(id){
  return this.http.get("http://localhost:8080/hotels"+"/"+id)
 

}




}
