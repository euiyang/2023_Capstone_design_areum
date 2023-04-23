package com.example.demo.repository;

import com.example.demo.entity.Member;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class MemberJpaRepositoryTest {

    @Autowired
    private MemberJpaRepository memberJpaRepository;


    @Test
    public void check(){
        Member member=Member.builder()
                .memberId("qwe")
                .memberPw("123")
                .email("gmail")
                .major("com")
                .phone("010")
                .name("yang")
                .build();

        memberJpaRepository.save(member);

        assertEquals(memberJpaRepository.findByMemberId("qwe"),Optional.of(member));//success
//        assertEquals(memberJpaRepository.findByMemberId("qe"),Optional.of(member));//fail
    }


}