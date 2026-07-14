package com.applicationTracker.full.Repository;

import com.applicationTracker.full.Models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, String> {
}
