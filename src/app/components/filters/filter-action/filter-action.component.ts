import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute, ActivationEnd} from "@angular/router";
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-filter-action',
  templateUrl: './filter-action.component.html',
  styleUrls: ['./filter-action.component.css']
})
export class FilterActionComponent implements OnInit {
  @Input() value:any;
  @Input() isLaunch:boolean;
  @Output() actionSelectedFilter: EventEmitter<any> = new EventEmitter<any>();
  isActive:any={};
  type:boolean;
  filterYear:string;
  filterLaunch:string;
  filterLand:string;
  filterString:string;

  constructor(private router: Router, private route : ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.type=!isNaN(this.value);
  }

  filterByYear(event){
    this.actionSelectedFilter.emit(`launchYear${event.target.innerText}`);
  }

  filterByLaunch(event){
    this.actionSelectedFilter.emit(`launchSuccess${event.target.innerText}`);
  }

  filterByLand(event){
    this.actionSelectedFilter.emit(`landSuccess${event.target.innerText}`);
  }

}

