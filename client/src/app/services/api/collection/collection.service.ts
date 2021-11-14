import {
	CollectionsDetailsInput,
	CollectionsDetailsResponse,
	CollectionsTranslationsInput,
	CollectionsTranslationsResponse,
} from 'src/app/models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CollectionService {
	private baseUrl = `${environment.apiUrl}/collection`;
	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) {}

	getCollectionDetail(
		input: CollectionsDetailsInput
	): Observable<CollectionsDetailsResponse> {
		const { collectionId, language } = input;
		const url = `${this.baseUrl}/${collectionId}`;
		let params = new HttpParams();
		language ? (params = params.set('language', language)) : '';
		return this.http.get<CollectionsDetailsResponse>(url, {
			headers: this.headers,
			params,
		});
	}

	getCollectionImages(
		input: CollectionsDetailsInput
	): Observable<CollectionsDetailsResponse> {
		const { collectionId, language } = input;
		const url = `${this.baseUrl}/${collectionId}/images`;
		let params = new HttpParams();
		language ? (params = params.set('language', language)) : '';
		return this.http.get<CollectionsDetailsResponse>(url, {
			headers: this.headers,
			params,
		});
	}

	getCollectionTranslations(
		input: CollectionsTranslationsInput
	): Observable<CollectionsTranslationsResponse> {
		const { collectionId, language } = input;
		const url = `${this.baseUrl}/${collectionId}/translations`;
		let params = new HttpParams();
		language ? (params = params.set('language', language)) : '';
		return this.http.get<CollectionsTranslationsResponse>(url, {
			headers: this.headers,
			params,
		});
	}
}
