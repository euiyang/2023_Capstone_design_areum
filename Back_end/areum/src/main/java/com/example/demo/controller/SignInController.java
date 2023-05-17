package com.example.demo.controller;

import com.example.demo.dto.SignInDto;
import com.example.demo.service.SignInService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SignInController {

    private final SignInService signInService;

    @PostMapping("/signIn")
    public String signIn(SignInDto signInDto){
        return signInService.checkIdAndPw(signInDto);
    }
}
