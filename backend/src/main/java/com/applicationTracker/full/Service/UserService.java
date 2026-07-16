package com.applicationTracker.full.Service;

import com.applicationTracker.full.DTO.RequestUserDTO;
import com.applicationTracker.full.DTO.UsersDTO;
import com.applicationTracker.full.Exception.ResourceNotFoundException;
import com.applicationTracker.full.Models.Users;
import com.applicationTracker.full.Repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UsersDTO getDTO(Users user){
        return new UsersDTO(
                user.getId(),
                user.getUserName(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail());
    }

    public UsersDTO getUserById(String id){
        Optional<Users> optionalUser = userRepository.findById(id);
        Users user = optionalUser.orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return getDTO(user);
    }

    public List<UsersDTO> getAllUsers(){
        List<Users> users = userRepository.findAll();
        return users.stream()
                .map(this::getDTO)
                .toList();
    }

    public UsersDTO createUser(RequestUserDTO dto){
        Users user = new Users();
        user.setUserName(dto.getUserName());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword())); // plaintext - deferred until JWT work

        Users saved = userRepository.save(user);
        return getDTO(saved);
    }

    public void deleteUser(String id){
        Optional<Users> optionalUser = userRepository.findById(id);
        Users user = optionalUser.orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.delete(user);
    }
}