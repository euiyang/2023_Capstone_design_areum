package com.example.demo.service;

import com.example.demo.repository.MemberJpaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class SignUpServiceTest {

    private JavaMailSender javaMailSender=new JavaMailSenderImpl();

    @Test
    public void sendEmailAndVerify(){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("officialareum9798@gmail.com");
        msg.setTo("euiyang2000@naver.com");
        msg.setSubject("areum verifying code");
        msg.setText("123456");

        javaMailSender.send(msg);
    }

}