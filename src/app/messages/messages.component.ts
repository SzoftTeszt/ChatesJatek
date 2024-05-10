import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  messages:any
  uzi:any

  constructor(private base:BaseService){
      this.base.getMessages().snapshotChanges()
      .pipe(
        map((ch)=>ch.map(
          (c)=> ({key: c.payload.key, ...c.payload.val()})
        ))
      )
      .subscribe(
        (uzik:any) => this.messages=uzik
      )
  }

  uziKuld(){
    let body:any ={}    
    body.name="Attila"
    body.message=this.uzi
    this.base.pushMessage(body)
  }


}
