package com.applicationTracker.full.Service;

import com.applicationTracker.full.DTO.ApplicationDTO;
import com.applicationTracker.full.Exception.ResourceNotFoundException;
import com.applicationTracker.full.Models.Application;
import com.applicationTracker.full.Models.Users;
import com.applicationTracker.full.Repository.ApplicationRepository;
import com.applicationTracker.full.Repository.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {
    private final ApplicationRepository applicationRepository;
    private final UserRepository userRepository;

    public ApplicationService(ApplicationRepository applicationRepository, UserRepository userRepository){
        this.applicationRepository = applicationRepository;
        this.userRepository = userRepository;
    }

    public ApplicationDTO getDTO(Application app){
        return new ApplicationDTO(
                app.getApplicationId(),
                app.getCompany(),
                app.getRole(),
                app.getUrl(),
                app.getStatus(),
                app.getNotes(),
                app.getDateApplied(),
                app.getUser().getId());
    }

    public ApplicationDTO getApplicationDTO(String id){
        Optional<Application> application = applicationRepository.findById(id);
        Application app = application.orElseThrow(() -> new ResourceNotFoundException("Application not found"));
        return getDTO(app);
    }

    public List<ApplicationDTO> getAllApplication(String userId){
        List<Application> applications = applicationRepository.findByUserId(userId);
        return applications.stream()
                .map(this::getDTO)
                .toList();
    }

    public void deleteApplication(String id){
        Optional<Application> optionalApplication = applicationRepository.findById(id);
        Application app = optionalApplication.orElseThrow(() -> new ResourceNotFoundException("Application not found"));
        applicationRepository.delete(app);
    }

    public ApplicationDTO updateStatus(String id, String status){
        Optional<Application> optionalApplication = applicationRepository.findById(id);
        Application app = optionalApplication.orElseThrow(() -> new ResourceNotFoundException("Application not found"));
        app.setStatus(status);
        Application saved = applicationRepository.save(app);
        return getDTO(saved);
    }

    public ApplicationDTO createApplication(ApplicationDTO dto){
        Users user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Application app = new Application();
        app.setCompany(dto.getCompany());
        app.setRole(dto.getRole());
        app.setUrl(dto.getUrl());
        app.setStatus(dto.getStatus());
        app.setNotes(dto.getNotes());
        app.setDateApplied(dto.getDateApplied());
        app.setUser(user);

        Application saved = applicationRepository.save(app);
        return getDTO(saved);
    }

    public ApplicationDTO updateApplication(String id, ApplicationDTO dto){
        Application app = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found"));

        app.setCompany(dto.getCompany());
        app.setRole(dto.getRole());
        app.setUrl(dto.getUrl());
        app.setNotes(dto.getNotes());
        // status intentionally excluded - use updateStatus for that

        Application saved = applicationRepository.save(app);
        return getDTO(saved);
    }
}