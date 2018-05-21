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

//    @GetMapping("/users/{userId}")
//    public Optional<User> findUserById(@PathVariable Long userId) {
//        return userRepository.findOne(userId);
//    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.delete(userId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

//    @PatchMapping("/users/{userId}")
//    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {
//
//        User userFromDb = userRepository.findById(userId).get();
//
//        userFromDb.setUserName(userRequest.getUserName());
//        userFromDb.setFirstName(userRequest.getFirstName());
//        userFromDb.setLastName(userRequest.getLastName());
//
//        return userRepository.save(userFromDb);
//    }

}