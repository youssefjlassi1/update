package com.manajero.backend_springboot.repositories.interfacedynamique;

import com.manajero.backend_springboot.collections.Test;
import com.manajero.backend_springboot.collections.interfacedynamique.Interface;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InterfaceRepo extends MongoRepository<Interface,String> {
    public Interface findInterfaceById (String interfaceid);
}
