// File: com/manajero/backend_springboot/repositories/communication/PostRepository.java
package com.manajero.backend_springboot.repositories.communication;

import com.manajero.backend_springboot.collections.communication.Post;
import com.manajero.backend_springboot.collections.communication.TypePost;
import com.manajero.backend_springboot.dto.UserActivity;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Primary
public interface PostRepository extends MongoRepository<Post, String> {
    List<Post> findAllByAuthorId(String idUser);
    List<Post> findAllByTypePost(TypePost typePost);

    @Aggregation(pipeline = {
            "{ $addFields: { totalReacts: { $add: ['$likes', '$dislikes'] } } }",
            "{ $sort: { totalReacts: -1 } }",
            "{ $limit: ?0 }"
    })
    List<Post> findTopPostsByReacts(int limit);

    @Aggregation(pipeline = {
            "{ $addFields: { " +
                    "totalReacts: { $cond: { if: { $isArray: \"$reacts\" }, then: { $size: \"$reacts\" }, else: 0 } }, " +
                    "totalComments: { $cond: { if: { $isArray: \"$comments\" }, then: { $size: \"$comments\" }, else: 0 } }" +
                    "} }",
            "{ $addFields: { totalEngagement: { $add: [\"$totalReacts\", \"$totalComments\", { $ifNull: [\"$nbViews\", 0] } ] } } }",
            "{ $sort: { totalEngagement: -1 } }",
            "{ $limit: ?0 }"
    })
    List<Post> findTopPostsByEngagement(int limit);

    @Query("SELECT new com.manajero.backend_springboot.dto.UserActivity(u.id, COUNT(p.id)) " +
            "FROM User u LEFT JOIN Post p ON u.id = p.authorId " +
            "GROUP BY u.id ORDER BY COUNT(p.id) DESC")
    List<UserActivity> findMostActiveUsers(Pageable pageable);
}
