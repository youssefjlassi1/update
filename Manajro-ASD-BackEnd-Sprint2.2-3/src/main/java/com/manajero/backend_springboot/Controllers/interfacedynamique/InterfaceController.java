package com.manajero.backend_springboot.Controllers.interfacedynamique;


import com.manajero.backend_springboot.Services.interfacedynamique.InterfaceService;
import com.manajero.backend_springboot.collections.interfacedynamique.Interface;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/interface")
@AllArgsConstructor
@Tag(name = "Interface Management")
@CrossOrigin(origins = "http://localhost:4200")
public class InterfaceController {

    @Autowired
    InterfaceService interfaceService;
    @PostMapping("/add")
    public Interface ajouterInterface(@RequestBody Interface inter){
        return interfaceService.addInterface(inter);
    }
    @GetMapping("/all")
    public List<Interface> getAllInterfaces() {
        return interfaceService.getAllInterfaces();
    }

    @PutMapping("/update/{id}")
    public Interface updateInterface(@PathVariable String id,@RequestBody Interface inter){
        return interfaceService.updateInterface(id,inter);
    }
    @GetMapping("/interface/{id}")
    Interface getTraining (@PathVariable String id){
        return  interfaceService.getInterfaceById(id);
    }


}
