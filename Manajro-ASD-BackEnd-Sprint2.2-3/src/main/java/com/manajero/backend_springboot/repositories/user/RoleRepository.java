package com.manajero.backend_springboot.repositories.user;


import com.manajero.backend_springboot.collections.user.ERole;
import com.manajero.backend_springboot.collections.user.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}