package com.applicationTracker.full.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RequestUserDTO {
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
