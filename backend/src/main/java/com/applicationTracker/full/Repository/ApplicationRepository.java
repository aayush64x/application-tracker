package com.applicationTracker.full.Repository;

import com.applicationTracker.full.Models.Application;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository <Application, String> {
    List<Application> findByUserId(String userId);
}
