package com.example.demo.repository;

import com.example.demo.entity.Member;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class MemberJpaRepositoryTest {

    @Autowired
    private MemberJpaRepository memberJpaRepository;

    @Test
    @Rollback(value = false)
    public void makeDummy() {
        Member member1=Member.builder()
                .memberId("123")
                .memberPw("123")
                .email("gmail")
                .major("computer")
                .phone("010")
                .name("yang")
                .build();

        Member member2=Member.builder()
                .memberId("456")
                .memberPw("456")
                .email("naver")
                .major("korean")
                .phone("011")
                .name("seung")
                .build();

        Member member3=Member.builder()
                .memberId("789")
                .memberPw("789")
                .email("daum")
                .major("english")
                .phone("017")
                .name("min")
                .build();

        memberJpaRepository.save(member1);
        memberJpaRepository.save(member2);
        memberJpaRepository.save(member3);

    }


    @Test
    //@Rollback(false)
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