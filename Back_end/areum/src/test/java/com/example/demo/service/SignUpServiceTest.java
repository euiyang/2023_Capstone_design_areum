package com.example.demo.service;

import com.example.demo.repository.MemberJpaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class SignUpServiceTest {

    @Autowired
    private MemberJpaRepository memberJpaRepository;
    private SignUpService signUpService=new SignUpService(memberJpaRepository);

    @Test
    public void sendEmailAndVerify(){
        String num = signUpService.sendCode("euiyang2000@naver.com");

        System.out.println(num);
    }


}