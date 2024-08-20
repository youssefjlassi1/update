package com.manajero.backend_springboot.Services.user;


import com.manajero.backend_springboot.collections.user.User;
import org.springframework.http.ResponseEntity;

import java.io.UnsupportedEncodingException;
import java.util.List;

public interface IUserService {
    public User addUser(User user);
    public User getUser(String idUser);
    public void deleteUser(String id);
    public List<User> getAllUsers();

}