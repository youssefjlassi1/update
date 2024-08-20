package com.manajero.backend_springboot.Services;

import com.manajero.backend_springboot.collections.Test;
import com.manajero.backend_springboot.repositories.TestRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TestImpl  implements TestService {

    @Autowired
    TestRepo tr;
    @Override
    public Test addTest(Test test) {
        return tr.save(test);
    }
}
