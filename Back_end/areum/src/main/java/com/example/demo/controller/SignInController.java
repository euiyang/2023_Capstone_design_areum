package com.example.demo.controller;

import com.example.demo.dto.SignInDto;
import com.example.demo.dto.SignInReturnDto;
import com.example.demo.security.TokenProvider;
import com.example.demo.service.SignInService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SignInController {

    private final SignInService signInService;
    private final TokenProvider tokenProvider;

    @PostMapping("/signIn")
    public ResponseEntity signIn(SignInDto signInDto){

        SignInReturnDto userData = signInService.getUserData(signInDto);
        String token;

        if(userData.getId()!=null){
            token = tokenProvider.create(signInDto.getId());
            return ResponseEntity.ok()
                    .header("Authorization","Bearer "+token)
                    .body(userData);
        }
        else {
            return ResponseEntity.noContent()
                    .build();
        }
    }
}
