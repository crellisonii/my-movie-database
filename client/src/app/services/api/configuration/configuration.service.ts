import {
	ConfigurationCountriesResponse,
	ConfigurationJobsResponse,
	ConfigurationLanguageResponse,
	ConfigurationResponse,
	ConfigurationTimezoneResponse,
} from 'src/app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ConfigurationService {
	private baseUrl = `${environment.apiUrl}/configuration`;
	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) {}

	getConfiguration(): Observable<ConfigurationResponse> {
		return this.http.get<ConfigurationResponse>(this.baseUrl, {
			headers: this.headers,
		});
	}

	getConfigurationCountries(): Observable<ConfigurationCountriesResponse[]> {
		const url = `${this.baseUrl}/countries`;
		return this.http.get<ConfigurationCountriesResponse[]>(url, {
			headers: this.headers,
		});
	}

	getConfigurationJobs(): Observable<ConfigurationJobsResponse[]> {
		const url = `${this.baseUrl}/jobs`;
		return this.http.get<ConfigurationJobsResponse[]>(url, {
			headers: this.headers,
		});
	}

	getConfigurationLanguages(): Observable<ConfigurationLanguageResponse[]> {
		const url = `${this.baseUrl}/languages`;
		return this.http.get<ConfigurationLanguageResponse[]>(url, {
			headers: this.headers,
		});
	}

	getConfigurationPrimaryTranslations(): Observable<string[]> {
		const url = `${this.baseUrl}/primary_translations`;
		return this.http.get<string[]>(url, { headers: this.headers });
	}

	getConfigurationTimezones(): Observable<ConfigurationTimezoneResponse[]> {
		const url = `${this.baseUrl}/timezones`;
		return this.http.get<ConfigurationTimezoneResponse[]>(url, {
			headers: this.headers,
		});
	}
}
