package com.manajero.backend_springboot.repositories.interfacedynamique;

import com.manajero.backend_springboot.collections.ASDProject.ASDProject;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ASDProjectRepository extends MongoRepository<ASDProject, String> {

    List<ASDProject> findByUserId(String userId);

}
