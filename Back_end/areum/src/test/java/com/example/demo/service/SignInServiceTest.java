package com.example.demo.service;

import com.example.demo.dto.SignInDto;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberJpaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class SignInServiceTest {

    @Autowired
    private MemberJpaRepository memberRepository;

    @Test
    public void testDto(){

        SignInDto signInDto =   new SignInDto();
        signInDto.setId("123");
        signInDto.setPw("123");

        System.out.println("signInDto = " + Long.parseLong(signInDto.getId()));

        Optional<Member> findMember = memberRepository.findByMemberId(signInDto.getId());

        System.out.println("findMember = " + findMember);
    }

}