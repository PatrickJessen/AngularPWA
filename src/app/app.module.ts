import { BrowserModule } from
	'@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileUploadComponent } from
	'./file-upload/file-upload.component';

import { AppComponent } from './app.component';
import {HttpClientModule} from
	'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListViewComponent } from './components/list-view/list-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
declarations: [
	AppComponent,
	FileUploadComponent,
 ListViewComponent,
],
imports: [
	BrowserModule,
	HttpClientModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatGridListModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
