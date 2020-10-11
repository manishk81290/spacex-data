import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {

  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get<Object>('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getAllDataByFilter(launchYear, launchSuccess, landSuccess){
    let filterString=(launchYear?`&launch_year=${launchYear.replace('launchYear','').toLowerCase()}`:'')
                      +(launchSuccess?`&launch_success=${launchSuccess.replace('launchSuccess','').toLowerCase()}`:'')
                      +(landSuccess?`&land_success=${landSuccess.replace('landSuccess','').toLowerCase()}`:'');
                      
    console.log(filterString);
    return this.http.get<Object>('https://api.spaceXdata.com/v3/launches?limit=100'+filterString);
  }

}
