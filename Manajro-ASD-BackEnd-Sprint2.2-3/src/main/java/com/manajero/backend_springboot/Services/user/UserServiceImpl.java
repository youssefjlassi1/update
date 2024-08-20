package com.manajero.backend_springboot.Services.user;

import com.manajero.backend_springboot.collections.user.User;
import com.manajero.backend_springboot.repositories.user.RoleRepository;
import com.manajero.backend_springboot.repositories.user.UserRepository;

import lombok.AllArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService{

    @Autowired
    UserRepository userRepository;


    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User addUser (User user) {
        return userRepository.save(user);
    }
    @Override
    public User getUser(String idUser){
        return userRepository.findById(idUser).orElse(null);
    }


    public void deleteUser(String id){
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    /////non I


}
