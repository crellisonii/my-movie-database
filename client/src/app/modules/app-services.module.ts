import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SearchService } from '../services';

@NgModule({
	declarations: [],
	imports: [HttpClientModule],
	exports: [HttpClientModule],
	providers: [SearchService],
})
export class ServicesModule {}
