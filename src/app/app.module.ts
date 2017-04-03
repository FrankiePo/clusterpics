import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { ItemComponent } from './item/item.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TableComponent,
    ItemComponent,
    FormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
