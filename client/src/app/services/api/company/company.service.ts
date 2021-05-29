import { CompanyDetailsInput, CompanyDetailsResponse } from 'src/app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CompanyService {
	private baseUrl = `${environment.apiUrl}/company`;
	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) {}

	getCompanyAlternativeNames(
		input: CompanyDetailsInput
	): Observable<CompanyDetailsResponse> {
		const { companyId } = input;
		const url = `${this.baseUrl}/${companyId}/alternative_names`;
		return this.http.get<CompanyDetailsResponse>(url, {
			headers: this.headers,
		});
	}

	getCompanyDetails(
		input: CompanyDetailsInput
	): Observable<CompanyDetailsResponse> {
		const { companyId } = input;
		const url = `${this.baseUrl}/${companyId}`;
		return this.http.get<CompanyDetailsResponse>(url, {
			headers: this.headers,
		});
	}

	getCompanyImages(
		input: CompanyDetailsInput
	): Observable<CompanyDetailsResponse> {
		const { companyId } = input;
		const url = `${this.baseUrl}/${companyId}/images`;
		return this.http.get<CompanyDetailsResponse>(url, {
			headers: this.headers,
		});
	}
}
