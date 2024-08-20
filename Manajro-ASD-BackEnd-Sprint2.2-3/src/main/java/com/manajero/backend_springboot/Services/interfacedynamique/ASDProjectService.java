package com.manajero.backend_springboot.Services.interfacedynamique;

import com.manajero.backend_springboot.collections.ASDProject.ASDProject;
import com.manajero.backend_springboot.repositories.interfacedynamique.ASDProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ASDProjectService implements IASDProjectService {
    @Autowired
    private ASDProjectRepository repository;

    public List<ASDProject> getAllProjects() {
        return repository.findAll();
    }

    public Optional<ASDProject> getProjectById(String id) {
        return repository.findById(id);
    }

    public List<ASDProject> getProjectsByUserId(String userId) {
        return repository.findByUserId(userId);
    }

    public ASDProject createProject(ASDProject project) {
        return repository.save(project);
    }

    public ASDProject updateProject(String id, ASDProject project) {
        project.setId(id);
        return repository.save(project);
    }

    public void deleteProject(String id) {
        repository.deleteById(id);
    }
}