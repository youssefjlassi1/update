package com.manajero.backend_springboot.Services.interfacedynamique;

import com.manajero.backend_springboot.collections.interfacedynamique.Interface;

import java.util.List;

public interface InterfaceService {

    public Interface addInterface(Interface inter);

    public List<Interface> getAllInterfaces();

    public Interface updateInterface(String id, Interface inter);

    public Interface getInterfaceById(String id);
}
