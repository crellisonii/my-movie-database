import {
	GenresMovieInput,
	GenresMovieResponse,
	GenresTVInput,
	GenresTVResponse,
} from 'src/app/models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class GenresService {
	private baseUrl = `${environment.apiUrl}/genre`;
	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) {}

	getGenreMovieList(input: GenresMovieInput): Observable<GenresMovieResponse> {
		const url = `${this.baseUrl}/movie/list`;
		let params = new HttpParams();
		input.language ? (params = params.set('language', input.language)) : '';
		return this.http.get<GenresMovieResponse>(url, {
			headers: this.headers,
			params,
		});
	}

	getGenreTVList(input: GenresTVInput): Observable<GenresTVResponse> {
		const url = `${this.baseUrl}/tv/list`;
		let params = new HttpParams();
		input.language ? (params = params.set('language', input.language)) : '';
		return this.http.get<GenresTVResponse>(url, {
			headers: this.headers,
			params,
		});
	}
}
