import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../../Services/Communication/chat-service.service';
import { WebSocketService } from '../../../Services/Communication/WebSocket.service';
import { ChatMessage } from '../../../Entities/chat-message';

@Component({
  selector: 'ngx-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.scss']
})
export class ChatComponentComponent implements OnInit, OnDestroy {
  users: { id: string, name: string }[] = [];
  messages: ChatMessage[] = [];
  selectedUser: { id: string, name: string } | null = null;
  newMessageText: string = '';
  senderId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.senderId = params['userId'] || null;
      this.loadUsers();
      this.listenForMessages();
    });
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }

  loadUsers(): void {
    this.chatService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Unable to connect to the backend server.');
    });
  }

  loadMessages(): void {
    if (this.selectedUser && this.senderId) {
      this.chatService.getMessages(this.senderId, this.selectedUser.id).subscribe(messages => {
        this.messages = messages;
      });
    }
  }

  sendMessage(): void {
    if (!this.selectedUser || !this.senderId) {
      console.error('No user selected or senderId missing');
      return;
    }

    const newMessage: ChatMessage = {
      id: '', // ID will be set by the backend
      senderId: this.senderId,
      receiverId: this.selectedUser.id,
      content: this.newMessageText,
      createdAt: new Date()
    };

    this.chatService.sendMessage(newMessage).subscribe(message => {
      this.messages.push(message);
      this.newMessageText = '';
      this.webSocketService.sendMessage(message); // Send the message through WebSocket
    }, error => {
      console.error('Error sending message:', error);
    });
  }

  selectUser(userId: string): void {
    this.selectedUser = this.users.find(user => user.id === userId) || null;
    this.loadMessages();
  }

  listenForMessages(): void {
    this.webSocketService.listen((message: ChatMessage) => {
      if (this.isMessageRelevant(message)) {
        this.messages.push(message);
      }
    });
  }

  private isMessageRelevant(message: ChatMessage): boolean {
    return (
      (message.receiverId === this.senderId && message.senderId === this.selectedUser?.id) ||
      (message.senderId === this.senderId && message.receiverId === this.selectedUser?.id)
    );
  }
}
