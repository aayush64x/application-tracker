package com.applicationTracker.full.Controller;

import com.applicationTracker.full.DTO.LoginRequestDTO;
import com.applicationTracker.full.Exception.ResourceNotFoundException;
import com.applicationTracker.full.Models.Users;
import com.applicationTracker.full.Repository.UserRepository;
import com.applicationTracker.full.Security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthenticationController(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequestDTO loginRequestDTO){
        String email = loginRequestDTO.getEmail();

        Users user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid email or password"));

        boolean passwordMatches = passwordEncoder.matches(loginRequestDTO.getPassword(), user.getPassword());

        if (!passwordMatches) {
            throw new ResourceNotFoundException("Invalid email or password");
        }

        return jwtService.generateToken(user.getId());
    }
}