import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterActionComponent } from './components/filters/filter-action/filter-action.component';
import { DataComponent } from './components/data/data.component';
import { SpacexComponent } from './components/spacex/spacex.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    FilterActionComponent,
    DataComponent,
    SpacexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
