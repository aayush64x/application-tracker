package com.applicationTracker.full.Controller;

import com.applicationTracker.full.DTO.ApplicationDTO;
import com.applicationTracker.full.Service.ApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService){
        this.applicationService = applicationService;
    }

    @PostMapping
    public ResponseEntity<ApplicationDTO> createApplication(@RequestBody ApplicationDTO dto){
        return ResponseEntity.status(201).body(applicationService.createApplication(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationDTO> getApplicationDTO(@PathVariable String id){
        return ResponseEntity.ok(applicationService.getApplicationDTO(id));
    }

    @GetMapping
    public ResponseEntity<List<ApplicationDTO>> getAllApplication(@RequestParam String userId){
        return ResponseEntity.ok(applicationService.getAllApplication(userId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApplicationDTO> updateApplication(@PathVariable String id, @RequestBody ApplicationDTO dto){
        return ResponseEntity.ok(applicationService.updateApplication(id, dto));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApplicationDTO> updateStatus(@PathVariable String id, @RequestBody Map<String, String> body){
        return ResponseEntity.ok(applicationService.updateStatus(id, body.get("status")));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable String id){
        applicationService.deleteApplication(id);
        return ResponseEntity.noContent().build();
    }
}