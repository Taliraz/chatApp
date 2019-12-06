import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor(
    private chatService: ChatService
  ) {}

  @Input()
  idSalon: number;

  messages: Message[];
  message: string = "";

  ngOnInit() {
    this.refreshAuto()
  }

  rafraichirMessage(){
    this.chatService.getMessages(this.idSalon).subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    )
  }

  refreshAuto(){
    setInterval(() => this.rafraichirMessage(),200);
  }
  envoyerMessage(){
    console.log(this.idSalon)
    if (this.message != ""){
      let toSend: Message = {
        pseudo: this.chatService.getPseudo(),
        text: this.message
      }
      this.chatService.saveMessage(this.idSalon,toSend).subscribe(
        (message: Message) => {
          this.rafraichirMessage();
        }
      )
      this.message = "";
    }
  }



}
