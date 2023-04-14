package com.example.demo.service;

import com.example.demo.dto.SignUpDto;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;


@Service
@RequiredArgsConstructor
public class SignUpService {
    private final MemberJpaRepository memberRepository;
    private final JavaMailSender jms;

    public String createVerifyCode(){
        String code="";
        Random ran = new Random();

        for(int i=0;i<8;i++){
            code+=String.valueOf(ran.nextInt(9));
        }

        return code;
    }

    public String checkId(String id){
        if(memberRepository.countByMemberId(id)==1) return "1";
        else return "0";
    }

    public String sendCode(String email){
        String code=createVerifyCode();
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("officialareum9798@gmail.com");
        msg.setTo(email);
        msg.setSubject("areum varifying code");
        msg.setText(code);
        jms.send(msg);
        return code;
    }

    public void join(SignUpDto signUpDto){
        Member member = new Member();
        member.setMemberId(signUpDto.getId());
        member.setMemberPw(signUpDto.getPw());
        member.setName(signUpDto.getName());
        member.setEmail(signUpDto.getEmail());
        member.setPhone(signUpDto.getPhone());
        member.setMajor(signUpDto.getMajor());
        memberRepository.save(member);
    }

//    public boolean checkCodeValid(String code){
//
//
//    }

}
