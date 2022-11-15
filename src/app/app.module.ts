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
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
  MatGridListModule,
  FormsModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
