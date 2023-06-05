package com.example.demo.service;

import com.example.demo.dto.MyPageDto;
import com.example.demo.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyPageService {

    private final MemberJpaRepository memberRepository;


    public void modify(MyPageDto myPageDto){
        memberRepository.modifyMember(myPageDto.getName(),myPageDto.getEmail(),myPageDto.getMajor(),myPageDto.getPhone(),myPageDto.getId());
    }
}
