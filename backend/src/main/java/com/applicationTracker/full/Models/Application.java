package com.applicationTracker.full.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String applicationId;
    private String company;
    private String role;
    private String url;
    private String status;
    private String notes;
    private LocalDate dateApplied;
    @ManyToOne
    @JoinColumn(name="user_id")
    private Users user;

}
