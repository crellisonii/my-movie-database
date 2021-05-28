import { AppRoutingModule, ServicesModule } from './modules/';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FontAwesomeModule,
		LayoutModule,
		ServicesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
