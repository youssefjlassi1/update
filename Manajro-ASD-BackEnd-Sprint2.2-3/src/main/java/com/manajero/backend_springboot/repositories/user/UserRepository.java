package com.manajero.backend_springboot.repositories.user;


import com.manajero.backend_springboot.collections.user.User;
import com.manajero.backend_springboot.dto.UserActivity;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Pageable; // Correct import
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    // In your UserRepository interface
    Optional<User> findByEmail(String email);
    @Query(value = "{'verify' : ?0}")
    User getUserCD(String code);

    @Query(value = "{'email' : ?0}")
    User getUserByUsername(String username);


    List<User> findAll();
    @Query(value = "{$or: [{'email': ?0}, {'email2': ?0}]}")
    Optional<User> findByEmailorEmail2(String email);

    User findByTelephone(String telephone);
    @Query(value="{'roles.id' : ?0}")
    List<User> findByRoleNot(String role);




    @Query(value="{'admin' : ?0}")
    List<User> findByAdmin(String admin);

    @Query(value = "{'verificationCode' : ?0}")
    User findByVerificationCode(String verificationCode);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<User> findByUsername(String username);


    //for the add methode of the module Leave management
    @Query(value="{'roles.id' : ?0}")
   long countByRole(String role);

    @Query(value="{'offers.id' : ?0}")
    public User getUserByOffersId(String Id);

    @Query(value="{'offers.id' : ?0}")
    public User findByOffersId(String Id);

    @Query("SELECT new com.manajero.backend_springboot.dto.UserActivity(u.id, COUNT(p.id)) " +
            "FROM User u LEFT JOIN Post p ON u.id = p.authorId " +
            "GROUP BY u.id ORDER BY COUNT(p.id) DESC")
    List<UserActivity> findMostActiveUsers(Pageable pageable);
}
