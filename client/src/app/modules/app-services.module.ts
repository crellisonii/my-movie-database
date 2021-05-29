import { CollectionService, CompanyService, SearchService } from '../services';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [],
	imports: [HttpClientModule],
	exports: [HttpClientModule],
	providers: [CollectionService, CompanyService, SearchService],
})
export class ServicesModule {}
