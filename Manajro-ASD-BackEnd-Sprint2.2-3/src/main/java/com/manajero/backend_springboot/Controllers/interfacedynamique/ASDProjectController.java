package com.manajero.backend_springboot.Controllers.interfacedynamique;

import com.manajero.backend_springboot.Services.interfacedynamique.ASDProjectService;
import com.manajero.backend_springboot.collections.ASDProject.ASDProject;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/app/asdprojects")


public class ASDProjectController {
    @Autowired
    private ASDProjectService service;

    @GetMapping("/user/{userId}")
    public List<ASDProject> getProjectsByUserId(@PathVariable String userId) {
        return service.getProjectsByUserId(userId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ASDProject> getProjectById(@PathVariable String id) {
        return service.getProjectById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ASDProject createProject(@RequestBody ASDProject project) {
        return service.createProject(project);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ASDProject> updateProject(@PathVariable String id, @RequestBody ASDProject project) {
        return service.getProjectById(id)
                .map(existingProject -> ResponseEntity.ok(service.updateProject(id, project)))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable String id) {
        if (service.getProjectById(id).isPresent()) {
            service.deleteProject(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}