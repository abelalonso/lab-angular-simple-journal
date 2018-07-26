import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export interface Entry{
  id: string,
  title: string,
  content: string,
  _v: number;
  date: Date;
}

@Injectable()
export class JournalService {

  constructor(private http: Http) { }

  getEntries(){

    return this.http.get('http://localhost:3000/api/journal-entries').map((res)=>
      res.json()
    )
  }

  getEntryById(id:string){
    return this.http.get(`http://localhost:3000/api/journal-entries/${id}`).map((res)=>
      {
        console.log('respuesta de servidor', res)
        return res.json()}
    )
  }
}
