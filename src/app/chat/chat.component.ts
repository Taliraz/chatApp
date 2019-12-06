import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';
import {Channel} from '../channel';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  selectionne: number;
  channels : Channel[];

  constructor(
    private chatService: ChatService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.chatService.getPseudo()){
      this.router.navigate(['/login'])
    }
    this.chatService.getChannels().subscribe(
      (channels: Channel[]) => this.channels = channels
    );
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectionne = parseInt(params.get('id'))
    })

  }

  afficherMessages(id:number){
    this.router.navigate(['/channels/'+id+'/messages'])
  }

}
