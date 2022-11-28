import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  getString(name: string) {
    return localStorage.getItem(name);
  }
  getJson(name: string) {
    var item = localStorage.getItem(name);
    return JSON.parse(item ?? "");
  }
  setJson(name: string, item: any) {
    localStorage.setItem(name, JSON.stringify(item));
  }
  setString(name: string, item: string) {
    localStorage.setItem(name, item);
  }
  removeItem(name:string){
localStorage.removeItem(name);
  }
  setBoolean(name: string, item: boolean) {
    if(item){
    localStorage.setItem(name, 'true');
    }
    else{
      localStorage.setItem(name, 'false');
    }
  }
  getBoolean(name: string) {
    return localStorage.getItem(name)=='true';
  }
}
