package com.example.demo.service;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class SignUpServiceTest {


    private JavaMailSenderImpl mailSender=new JavaMailSenderImpl();

    @Test
    public void sendEmailAndVerify(){

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername("officialareum9798@gmail.com");
        mailSender.setPassword("cupcihhrkptfufki");

        Properties prop = mailSender.getJavaMailProperties();
        prop.put("mail.smtp.starttls.enable","true");

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("officialareum9798@gmail.com");
        msg.setTo("euiyang2000@naver.com");
        msg.setSubject("areum varifying code");
        msg.setText("123456");

        mailSender.send(msg);

    }

}