import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import {SpacexDataService} from './../../services/spacex-data.service';
import {filter, map} from 'rxjs/operators';
import { query } from '@angular/animations';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent implements OnInit {
  spacexData:any;
  filterYear:any;
  noData:boolean;
  params:any;

  constructor(private spacexDataService:SpacexDataService, private route: ActivatedRoute, private router: Router) { 
      
  }

  ngOnInit(): void {
    this.spacexDataService.getAllData().subscribe(
      data=>{
        this.spacexData=data;
        this.noData=this.spacexData.length===0?true:false;
        this.filterYear=this.spacexData.map(year=>{
          return year.launch_year
        });
        this.filterYear=[...new Set(this.filterYear)];
      }
    );
    if(document.location.pathname!=="/"){
      this.getFilterData('');
    }
  }

  getFilterData($event){
    //console.log(document.location.pathname);
    if(document.location.pathname==="/"){
      this.router.navigate([`/${$event}`]);
      this.spacexDataService.getAllDataByFilter(
        $event.indexOf('launchYear')>-1?$event:'',
        $event.indexOf('launchSuccess')>-1?$event:'',
        $event.indexOf('landSuccess')>-1?$event:'',
      ).subscribe(
        data=>{
          this.spacexData=data;
          this.noData=this.spacexData.length===0?true:false;
        }
      );
    }
    else{
      let queryParams=document.location.pathname.split('/');
      let isReplaced=false;
      let year='';
      let launch='';
      let land='';
      for(let i=1;i<queryParams.length;i++){
        if(queryParams[i].indexOf('launchYear')>-1){
          year=queryParams[i];
          if($event.indexOf('launchYear')>-1){
            queryParams[i]=$event===year?'':$event;
            isReplaced=true;
          }
          year=queryParams[i];
        }
        if(queryParams[i].indexOf('launchSuccess')>-1){
          launch=queryParams[i];
          if($event.indexOf('launchSuccess')>-1){
            queryParams[i]=$event===launch?'':$event;
            isReplaced=true;
          }
          launch=queryParams[i];
        }
        if(queryParams[i].indexOf('landSuccess')>-1){
          land=queryParams[i];
          if($event.indexOf('landSuccess')>-1){
            queryParams[i]=$event===land?'':$event;
            isReplaced=true;
          }
          land=queryParams[i];
        }
      }
      if(isReplaced===false){
        queryParams.push($event)
        if($event.indexOf('launchYear')>-1){
          year=$event;
        }
        else{
          if($event.indexOf('launchSuccess')>-1){
            launch=$event;
          }
          else{
            land=$event;
          }
        }
      }
      console.log(queryParams);
      console.log('year',year);
      console.log('launch',launch);
      console.log('land',land);
      this.router.navigate([`/${queryParams.join('/')}`]);
      this.spacexDataService.getAllDataByFilter(year, launch, land)
      .subscribe(
        data=>{
          this.spacexData=data;
          this.noData=this.spacexData.length===0?true:false;
        }
      );
    }
  }
}
