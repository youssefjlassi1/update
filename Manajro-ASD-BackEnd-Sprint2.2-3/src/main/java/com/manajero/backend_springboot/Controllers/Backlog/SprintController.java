package com.manajero.backend_springboot.Controllers.Backlog;


import com.manajero.backend_springboot.Services.Backlog.SprintServiceImpl;
import com.manajero.backend_springboot.collections.Backlog.Sprint;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/app/sprints")
@AllArgsConstructor
public class SprintController {
    @Autowired
    SprintServiceImpl sprintService;


    @PostMapping("/addSprint")
    public Sprint createSprint(@RequestBody Sprint sprint) {
        return sprintService.addSprint(sprint);
    }

    @GetMapping("/allSprints")
    public List<Sprint> getAllSprints() {
        return sprintService.getAllSprints();
    }

    @GetMapping("/getsprint/{id}")
    public Sprint getSprintById(@PathVariable String id) {
        return sprintService.getSprintById(id);
    }

    @PutMapping("/update/{id}")
    public Sprint updateSprint(@PathVariable String id, @RequestBody Sprint sprint) {
        return sprintService.updateSprint(id, sprint);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSprint(@PathVariable String id) {
        sprintService.deleteSprint(id);
    }
}
