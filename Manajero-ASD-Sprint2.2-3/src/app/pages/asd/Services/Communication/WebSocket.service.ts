import { Injectable } from '@angular/core';
import { Client, Frame, IMessage } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { ChatMessage } from '../../Entities/chat-message';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: Client | null = null;

  constructor() {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection(): void {
    const serverUrl = 'http://localhost:8088/websocket'; // Adjust the URL as needed
    const ws = new SockJS(serverUrl);
    this.stompClient = new Client({
      webSocketFactory: () => ws,
      reconnectDelay: 5000, // Auto reconnect after 5 seconds
      debug: (str) => {
        console.log(str);
      }
    });

    this.stompClient.onConnect = (frame: Frame) => {
      console.log('Connected: ' + frame);
      this.stompClient!.subscribe('/topic/messages', (message: IMessage) => {
        if (message.body) {
          const chatMessage: ChatMessage = JSON.parse(message.body);
          this.handleIncomingMessage(chatMessage);
        }
      });
    };

    this.stompClient.onStompError = (frame: Frame) => {
      console.error('Stomp error: ' + frame.headers['message']);
    };

    this.stompClient.activate(); // Properly connect the client
  }
  private onError = (error: any): void => {
    console.error('WebSocket connection error:', error);
  };

  private handleIncomingMessage(message: ChatMessage): void {
    // Placeholder for message handling; this will be replaced by a callback
  }

  public listen(callback: (message: ChatMessage) => void): void {
    this.handleIncomingMessage = callback;
  }

  public sendMessage(message: ChatMessage): void {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.publish({
        destination: '/app/chat',
        body: JSON.stringify(message)
      });
    }
  }

  public disconnect(): void {
    if (this.stompClient) {
     // this.stompClient.deactivate(() => {
        console.log('Disconnected');
     // });
    }
  }
  
}
