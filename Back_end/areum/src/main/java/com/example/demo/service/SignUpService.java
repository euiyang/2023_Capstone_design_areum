package com.example.demo.service;

import com.example.demo.dto.SignUpDto;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.Random;


@Service
@RequiredArgsConstructor
public class SignUpService {
    private final MemberJpaRepository memberRepository;
    private final JavaMailSenderImpl mailSender;

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
        msg.setSubject("[Areum 이메일 인증 코드]");
        msg.setText("Areum 회원가입을 위한 인증 코드입니다.\n"+
                "본 메일은 발신전용으로 회신이 되지 않습니다.\n"+
                "추가 문의는 해당 앱의 고객센터를 통해 접수바랍니다.\n"+
                "인증 코드 : [ "+code+" ]");

        mailSender.send(msg);

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

}
