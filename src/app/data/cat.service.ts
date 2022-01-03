import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { catchError, map, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  cats$: Subject<Cat[]> = new Subject<Cat[]>();

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<Cat> {
    return this.http.get<Cat>(`api/cats/${id}`).pipe(
      catchError(this.handleError<Cat>(`getCat id=${id}`))
    );
  }

  getAll(): Observable<Cat[]> {
    return this.http.get<Cat[]>('api/cats').pipe(
      map((cats: Cat[]) => {
        this.cats$.next(cats);
        return cats;
      }),
      catchError(this.handleError<Cat[]>(`getCats`))
    )
  }

  post(name: string): Observable<Cat> {
    return this.http.post<Cat>('api/cats', {name: name}).pipe(
      map((cat: Cat) => {
        this.getAll();
        return cat;
      }),
      catchError(this.handleError<Cat>(`getCat name=${name}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
