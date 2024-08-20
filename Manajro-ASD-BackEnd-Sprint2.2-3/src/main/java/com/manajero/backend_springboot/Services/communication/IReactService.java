package com.manajero.backend_springboot.Services.communication;



import com.manajero.backend_springboot.collections.communication.React;
import com.manajero.backend_springboot.collections.communication.TypeReact;

import java.util.List;

public interface IReactService {
    List<React> getReactByPost(String idPost);

    React getReact(String idReact);

    React addReact(String idUser, String idPost, String type);

    TypeReact getTypeReact(String idUser, String idPost);

    void deleteReact(String idUser, String idPost);
}
