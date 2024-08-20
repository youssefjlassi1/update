package com.manajero.backend_springboot.repositories;

import com.manajero.backend_springboot.collections.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepo extends MongoRepository<Test,Long> {
}
