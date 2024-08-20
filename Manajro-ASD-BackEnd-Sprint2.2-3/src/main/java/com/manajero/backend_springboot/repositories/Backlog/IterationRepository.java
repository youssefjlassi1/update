package com.manajero.backend_springboot.repositories.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Iteration;
import com.manajero.backend_springboot.collections.Backlog.Sprint;
import com.manajero.backend_springboot.collections.Backlog.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface IterationRepository extends MongoRepository<Iteration,String> {

    public Iteration findIterationById(String sprintId);


}
