package com.example.demo.service;

import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@RequiredArgsConstructor
class SignUpServiceTest {


    private JavaMailSenderImpl mailSender=new JavaMailSenderImpl();

    @Value("${spring.mail.username}")
    private String username;

    @Value("${spring.mail.password}")
    private String password;

    @Test
    public void sendEmailAndVerify(){
        Properties prop = mailSender.getJavaMailProperties();
        prop.put("mail.smtp.starttls.enable","true");
        prop.put("mail.smtp.auth","true");

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername(username);
        mailSender.setPassword(password);

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("officialareum9798@gmail.com");
        msg.setTo("euiyang2000@naver.com");
        msg.setSubject("areum varifying code");
        msg.setText("123456");

        mailSender.send(msg);

    }

}