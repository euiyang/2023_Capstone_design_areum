package com.example.demo.controller;

import com.example.demo.dto.SignUpDto;
import com.example.demo.service.SignUpService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class SignUpController {
    Logger logger= LoggerFactory.getLogger(this.getClass());

    private final SignUpService signUpService;

    @PostMapping("/signUp/check")
    public String checkId(String id){
        logger.warn("id check");
        return signUpService.checkId(id);
    }

    @PostMapping("/signUp/email")
    public String sendEmail(@RequestParam("email") String email){
        logger.warn("mail");
        return signUpService.sendCode(email);
    }

    @PostMapping("/signUp")
    public void signUp(SignUpDto signUpDto){
        logger.error("sign up");
        signUpService.join(signUpDto);
    }

}
