// src/main/java/com/manajero/backend_springboot/Controllers/communication/ChatController.java
package com.manajero.backend_springboot.Controllers.communication;

import com.manajero.backend_springboot.Services.communication.IChatService;
import com.manajero.backend_springboot.Services.user.IUserService;
import com.manajero.backend_springboot.collections.communication.ChatMessage;
import com.manajero.backend_springboot.collections.user.User;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/app/chat")
@AllArgsConstructor
public class ChatController {

    private final IChatService chatService;
    private final IUserService userService;

    @PostMapping("/send")
    public ResponseEntity<ChatMessage> sendMessage(@RequestBody ChatMessage chatMessage) {
        ChatMessage savedMessage = chatService.saveMessage(chatMessage);
        return new ResponseEntity<>(savedMessage, HttpStatus.CREATED);
    }
    @GetMapping("/messages")
    public ResponseEntity<List<ChatMessage>> getMessages(@RequestParam String senderId, @RequestParam String receiverId) {
        List<ChatMessage> messages = chatService.getMessages(senderId, receiverId);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/chatList")
    public ResponseEntity<List<ChatMessage>> getChatList() {
        List<ChatMessage> chatList = chatService.getAllChats();
        return new ResponseEntity<>(chatList, HttpStatus.OK);
    }

}
