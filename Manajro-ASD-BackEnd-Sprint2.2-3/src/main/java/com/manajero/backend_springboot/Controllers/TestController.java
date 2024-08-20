package com.manajero.backend_springboot.Controllers;

import com.manajero.backend_springboot.collections.Test;
import com.manajero.backend_springboot.Services.TestService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
@AllArgsConstructor
@Tag(name = "Test Management")

public class TestController {
    TestService testService;
    @PostMapping("/add")
    public Test ajouterTest(@RequestBody Test test){
        return testService.addTest(test);
    }
}
