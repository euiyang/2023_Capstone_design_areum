package com.example.demo.service;

import com.example.demo.dto.SignUpDto;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberJpaRepository;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.Random;


@Service
@RequiredArgsConstructor
public class SignUpService {
    private final MemberJpaRepository memberRepository;
    private final JavaMailSender javaMailSender;

    public String createVerifyCode(){
        String code="";
        Random ran = new Random();

        for(int i=0;i<8;i++){
            code+=String.valueOf(ran.nextInt(9));
        }

        return code;
    }

    public String checkId(String id){
        if(memberRepository.findByMemberId(id).isPresent()) return "1";
        else return "0";
    }

    public String sendCode(String email){
        String code=createVerifyCode();
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("officialareum9798@gmail.com");
        msg.setTo(email);
        msg.setSubject("areum varifying code");
        msg.setText(code);
        try{
            javaMailSender.send(msg);
        }catch(MailException e){
            System.out.println(e);
        }

        return code;
    }

    public void join(SignUpDto signUpDto){
        Member member = Member.builder()
                .memberId(signUpDto.getId())
                .memberPw(signUpDto.getPw())
                .email(signUpDto.getEmail())
                .phone(signUpDto.getPhone())
                .major(signUpDto.getMajor())
                .name(signUpDto.getName())
                .build();
        memberRepository.save(member);
    }

//    public boolean checkCodeValid(String code){
//
//
//    }

}
