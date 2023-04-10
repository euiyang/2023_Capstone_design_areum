package com.example.demo.service;

import com.example.demo.domain.Member;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.MemoryMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {


    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    public String join(Member member) {
        duplicateMemberCheck(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void duplicateMemberCheck(Member member) {
        memberRepository.findbyId(member.getId()).
                ifPresent(m -> {
                    throw new IllegalStateException("already exists");
                });
    }

    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(String memberId) {
        return memberRepository.findbyId(memberId);
    }


}
