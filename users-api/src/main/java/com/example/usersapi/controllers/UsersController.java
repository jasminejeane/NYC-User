package com.example.usersapi.controllers;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }


    @PatchMapping("/{id}")
    public User updateUser(@RequestBody User updatedUser) {
        return userRepository.save(updatedUser);
    }


    @PostMapping("/")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.delete(userId);
        return HttpStatus.OK;
    }

}