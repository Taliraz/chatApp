import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Channel} from './channel';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Message} from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  private pseudo: string;

  sauvegarderPseudo(pseudo){
    this.pseudo = pseudo;
  }

  getPseudo(){
    return this.pseudo;
  }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(environment.backUrl+'/channels')
  }

  getMessages(idChannel: number): Observable<Message[]> {
    return this.http.get<Message[]>(environment.backUrl+'/channels/'+idChannel+'/messages')
  }

  saveMessage(idChannel: number, message: Message): Observable<Message>{
    return this.http.post<Message>(environment.backUrl+'/channels/'+idChannel+'/messages', message)
  }

}
