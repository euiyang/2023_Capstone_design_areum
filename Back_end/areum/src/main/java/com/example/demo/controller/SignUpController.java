package com.example.demo.controller;

import com.example.demo.dto.SignUpDto;
import com.example.demo.service.SignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SignUpController {

    private final SignUpService signUpService;

    @PostMapping("/signUp/{id}")
    public String checkId(@PathVariable("id")String id){
        return signUpService.checkId(id);
    }

    @PostMapping("/signUp/email")
    public String sendEmail(@RequestParam("email") String email){
        return signUpService.sendCode(email);
    }

    @PostMapping("/signUp")
    public void signUp(SignUpDto signUpDto){
        signUpService.join(signUpDto);
    }

}
