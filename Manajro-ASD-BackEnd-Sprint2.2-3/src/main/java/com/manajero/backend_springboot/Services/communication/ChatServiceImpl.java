package com.manajero.backend_springboot.Services.communication;


import com.manajero.backend_springboot.collections.communication.ChatMessage;
import com.manajero.backend_springboot.repositories.communication.ChatMessageRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class ChatServiceImpl implements IChatService{

    private final ChatMessageRepository chatMessageRepository;

    @Override
    public ChatMessage saveMessage(ChatMessage message) {
        // Ensure ID is set to null if it's empty so MongoDB can generate it
        if (message.getId() == null || message.getId().isEmpty()) {
            message.setId(null);
        }
        message.setCreatedAt(LocalDateTime.now()); // Set the created time
        return chatMessageRepository.save(message);
    }
    @Override
    public List<ChatMessage> getMessages(String senderId, String receiverId) {
        return chatMessageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
    }

    @Override
    public List<ChatMessage> getAllChats() {
        return chatMessageRepository.findAll();
    }




}
