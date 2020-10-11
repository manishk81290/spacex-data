import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() filterYear:any;
  @Output() selectedFilter: EventEmitter<any> = new EventEmitter<any>();
  launchLandObj:Array<object>;
  constructor() {
    this.launchLandObj=[
      {
        text:'True',
        value: true
      },
      {
        text:'False',
        value: false
      }
    ];
   }

  ngOnInit(): void {
  }

  getFilterData($event){
    this.selectedFilter.emit($event);
  }

}
