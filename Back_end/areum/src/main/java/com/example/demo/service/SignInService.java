package com.example.demo.service;

import com.example.demo.dto.SignInDto;
import com.example.demo.dto.SignInReturnDto;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberJpaRepository;
import com.example.demo.security.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SignInService {

    private final MemberJpaRepository memberRepository;

    public SignInReturnDto getUserData(SignInDto signInDto){
        Optional<Member> findMember = memberRepository.findByMemberId(signInDto.getId());


        if(findMember.isPresent()&&findMember.get().getMemberPw().equals(signInDto.getPw())) {
            Member member=findMember.get();

            SignInReturnDto dto = SignInReturnDto.builder()
                .id(member.getId())
                .name(member.getName())
                .email(member.getEmail())
                .phone(member.getPhone())
                .major(member.getMajor())
                .build();

            return dto;
        }
        else return SignInReturnDto.builder().build();
    }
}
