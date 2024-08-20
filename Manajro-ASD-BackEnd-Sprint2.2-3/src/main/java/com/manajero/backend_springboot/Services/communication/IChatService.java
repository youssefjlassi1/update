package com.manajero.backend_springboot.Services.communication;

import com.manajero.backend_springboot.collections.communication.ChatMessage;

import java.util.List;

public interface IChatService {

    public ChatMessage saveMessage(ChatMessage chatMessage);
    public List<ChatMessage> getMessages(String senderId, String receiverId);
    public List<ChatMessage> getAllChats();

}
