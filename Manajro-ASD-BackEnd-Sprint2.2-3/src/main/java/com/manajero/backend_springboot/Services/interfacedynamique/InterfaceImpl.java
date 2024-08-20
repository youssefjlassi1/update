package com.manajero.backend_springboot.Services.interfacedynamique;

import com.manajero.backend_springboot.collections.interfacedynamique.Interface;
import com.manajero.backend_springboot.repositories.interfacedynamique.InterfaceRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class InterfaceImpl implements InterfaceService {


    @Autowired
    private InterfaceRepo tr;
    @Override
    public Interface addInterface(Interface inter) {
        return tr.save(inter);
    }

    @Override
    public List<Interface> getAllInterfaces() {
        return tr.findAll();
    }

    @Override
    public Interface updateInterface(String id, Interface inter) {
        Interface interface1= tr.findInterfaceById(id);
        if (interface1 == null) {
            throw new NullPointerException("Invalid Interface ID");
        }
        interface1.setDefinition(inter.getDefinition());
        interface1.setOrigin(inter.getOrigin());
        interface1.setWhyDescription(inter.getWhyDescription());
        interface1.setPro(inter.getPro());
        interface1.setCon(inter.getCon());

        interface1.setWhatdesc(inter.getWhatdesc());
        interface1.setSpecGenral(inter.getSpecGenral());
        interface1.setCollGenral(inter.getCollGenral());
        interface1.setLearnGenral(inter.getLearnGenral());
        interface1.setWhatifdesc(inter.getWhatifdesc());
        interface1.setHowdesc(inter.getHowdesc());
        interface1.setSpecdesc(inter.getSpecdesc());
        interface1.setColldesc(inter.getColldesc());
        interface1.setLearndesc(inter.getLearndesc());



        return tr.save(interface1);
    }

    @Override
    public Interface getInterfaceById(String id) {

        //  return tr.findById(id).orElseThrow(() -> new NullPointerException("Invalid Interface"));
        return tr.findById(id).orElse(null);
    }
}
