import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextFileService {

  
  constructor(private http: HttpClient) { }

  getFile(fileName: string) {
      return this.http.get(`../assets/data/textInfo/${fileName}`, {responseType: 'text'});
  }
}
