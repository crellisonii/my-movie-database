import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReviewInput, ReviewResponse } from 'src/app/models';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	private baseUrl = `${environment.apiUrl}/review`;
	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) {}

	getReview({ review_id }: ReviewInput): Observable<ReviewResponse> {
		const url = `${this.baseUrl}/${review_id}`;
		return this.http.get<ReviewResponse>(url, { headers: this.headers });
	}
}
