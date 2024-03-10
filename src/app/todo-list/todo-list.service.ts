import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';



@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  private findAllUrl ='https://localhost:7254/api/Todos';
  private findUrl = 'https://localhost:7254/api/Todos/?';
  private createUrl = 'https://localhost:7254/api/Todos';
  private updateUrl ='https://localhost:7254/api/Todos/?';
  private deleteUrl = 'https://localhost:7254/api/Todos/?';
  

  constructor(private http: HttpClient) { }

  create(todo: Todo):Observable<Todo>{
    const copy= this.convert(todo);
    return this.http.post<Todo>(this.createUrl, copy);

  }
  update(todo: Todo):Observable<Todo>{
    const copy= this.convert(todo);
    return this.http.put<Todo>('${this.updateUrl}/${copy.id}',copy);

  }

  find(id: number): Observable<Todo>
{
  return this.http.get<Todo>('${this.findUrl}/${id}');
} 

findAll(): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.findAllUrl);
}

delete(id: number | undefined): Observable<HttpResponse<any>>{
  return this.http.delete<any>('${this.deleteUrl}/${id}');
}

 private convert(todo: Todo): Todo{
    const copy: Todo= Object.assign({},todo);
    return copy;
  }
}

