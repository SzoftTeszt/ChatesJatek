import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refMessages:AngularFireList<any>

  constructor(private db:AngularFireDatabase) {
      this.refMessages = db.list("cica")
   }

   pushMessage(body:any){
      this.refMessages.push(body)
   }

   getMessages(){
    return this.refMessages
   }

   deleteMessage(key:any){
    this.refMessages.remove(key)
   }

   updateMessage(key:any, body:any){
    this.refMessages.update(key, body)
   }
}
