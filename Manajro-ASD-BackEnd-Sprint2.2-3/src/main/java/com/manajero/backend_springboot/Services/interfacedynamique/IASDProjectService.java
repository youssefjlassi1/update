package com.manajero.backend_springboot.Services.interfacedynamique;

import com.manajero.backend_springboot.collections.ASDProject.ASDProject;

import java.util.List;
import java.util.Optional;

public interface IASDProjectService {



    public List<ASDProject> getAllProjects();
    public Optional<ASDProject> getProjectById(String id);

    public ASDProject createProject(ASDProject project);


    public ASDProject updateProject(String id, ASDProject project);

    public void deleteProject(String id);
}
