package com.manajero.backend_springboot.Services.Backlog;

import com.manajero.backend_springboot.collections.Backlog.Sprint;

import java.util.List;

public interface ISprintService {
    public Sprint addSprint(Sprint sprint);
    public Sprint updateSprint(String id, Sprint sprint);

    public List<Sprint> getAllSprints();
    public void deleteSprint(String id);
    public Sprint getSprintById(String id);
}
