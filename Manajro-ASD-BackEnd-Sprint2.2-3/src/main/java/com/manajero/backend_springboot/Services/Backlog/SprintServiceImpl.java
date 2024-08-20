package com.manajero.backend_springboot.Services.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Sprint;
import com.manajero.backend_springboot.repositories.Backlog.SprintRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SprintServiceImpl  implements ISprintService{
    @Autowired
    SprintRepository spr ;

    @Override
    public Sprint addSprint(Sprint sprint) {
        return spr.save(sprint);
    }

    @Override
    public Sprint updateSprint(String id, Sprint sprint) {

        Sprint existingSprint = spr.findSprintBySprintId(id);
        existingSprint.setSprintName(sprint.getSprintName());
        existingSprint.setSprintDescription(sprint.getSprintDescription());
      //  existingSprint.setStartDate(sprint.getStartDate());
        //existingSprint.setEndDate(sprint.getEndDate());
        existingSprint.setEstimation(sprint.getEstimation());
       // existingSprint.setIsCompleted(sprint.getIsCompleted());
        return spr.save(existingSprint);
    }

    @Override
    public List<Sprint> getAllSprints() {
        return spr.findAll();
    }



    @Override
    public void deleteSprint(String id) {
        spr.deleteById(id);
    }

    @Override
    public Sprint getSprintById(String id) {
        return spr.findById(id).orElseThrow(() -> new RuntimeException("Sprint not found"));
    }
}
