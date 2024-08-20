package com.manajero.backend_springboot.repositories.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Sprint;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SprintRepository extends MongoRepository<Sprint, String> {
    public Sprint findSprintBySprintId(String sprintId);
}
