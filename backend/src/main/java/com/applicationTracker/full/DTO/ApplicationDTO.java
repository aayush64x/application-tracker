package com.applicationTracker.full.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ApplicationDTO {
    private String applicationId;
    private String company;
    private String role;
    private String url;
    private String status;
    private String notes;
    private LocalDate dateApplied;
    private String userId;
}
