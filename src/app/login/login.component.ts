import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatService} from '../chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pseudo: string;

  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  savePseudo(){
    this.chatService.sauvegarderPseudo(this.pseudo);
    this.router.navigate(['channels'])
  }

}
