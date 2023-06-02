package com.example.demo.controller;

import com.example.demo.dto.SignInDto;
import com.example.demo.dto.SignInReturnDto;
import com.example.demo.security.TokenProvider;
import com.example.demo.service.SignInService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class SignInController {

    Logger logger= LoggerFactory.getLogger(this.getClass());
    private final SignInService signInService;
    private final TokenProvider tokenProvider;

    @PostMapping("/signIn")
    public ResponseEntity signIn(SignInDto signInDto){
        logger.warn("sign in");
        logger.warn("{} {} id pw",signInDto.getId(),signInDto.getPw());

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
