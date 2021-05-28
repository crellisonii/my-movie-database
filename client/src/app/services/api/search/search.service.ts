import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
	SearchCollectionInput,
	SearchCollectionResponse,
	SearchMovieInput,
	SearchMovieResponse,
	SearchMultipleInput,
	SearchMultipleResponse,
	SearchPeopleInput,
	SearchPeopleResponse,
} from '../../../models/apis/search';
import {
	SearchTVInput,
	SearchTVResponse,
} from 'src/app/models/apis/search/search-tv.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SearchService {
	private baseUrl = `${environment.apiUrl}/search`;
	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) {}

	searchCollections(
		input: SearchCollectionInput
	): Observable<SearchCollectionResponse> {
		const url = `${this.baseUrl}/collection`;
		const { language, page, query } = input;
		let params = new HttpParams().set('query', query);
		language ?? params.set('language', language);
		page ?? params.set('page', `${page}`);
		return this.http.get<SearchCollectionResponse>(url, {
			params,
			headers: this.headers,
		});
	}

	searchMovies(input: SearchMovieInput): Observable<SearchMovieResponse> {
		const url = `${this.baseUrl}/movie`;
		const {
			include_adult,
			language,
			query,
			page,
			primary_release_year,
			region,
			year,
		} = input;
		let params = new HttpParams().set('query', query);
		include_adult ?? params.set('include_adult', `${include_adult}`);
		language ?? params.set('language', language);
		page ?? params.set('page', `${page}`);
		primary_release_year ??
			params.set('primary_release_year', `${primary_release_year}`);
		region ?? params.set('region', region);
		year ?? params.set('year', `${year}`);
		return this.http.get<SearchMovieResponse>(url, {
			params,
			headers: this.headers,
		});
	}

	searchMultiple(
		input: SearchMultipleInput
	): Observable<SearchMultipleResponse> {
		const url = `${this.baseUrl}/multi`;
		const { include_adult, language, page, query, region } = input;
		let params = new HttpParams().set('query', query);
		include_adult ?? params.set('include_adult', `${include_adult}`);
		language ?? params.set('language', language);
		page ?? params.set('page', `${page}`);
		region ?? params.set('region', region);
		return this.http.get<SearchMultipleResponse>(url, {
			params,
			headers: this.headers,
		});
	}

	searchPeople(input: SearchPeopleInput): Observable<SearchPeopleResponse> {
		const url = `${this.baseUrl}/person`;
		const { include_adult, language, page, query, region } = input;
		let params = new HttpParams().set('query', query);
		include_adult ?? params.set('include_adult', `${include_adult}`);
		language ?? params.set('language', language);
		page ?? params.set('page', `${page}`);
		region ?? params.set('region', region);
		return this.http.get<SearchPeopleResponse>(url, {
			params,
			headers: this.headers,
		});
	}

	searchTV(input: SearchTVInput): Observable<SearchTVResponse> {
		const url = `${this.baseUrl}/tv`;
		const { first_air_date_year, include_adult, language, page, query } = input;
		let params = new HttpParams().set('query', query);
		first_air_date_year ??
			params.set('first_air_date_year', `${first_air_date_year}`);
		include_adult ?? params.set('include_adult', `${include_adult}`);
		language ?? params.set('language', language);
		page ?? params.set('page', `${page}`);
		return this.http.get<SearchTVResponse>(url, {
			params,
			headers: this.headers,
		});
	}
}
