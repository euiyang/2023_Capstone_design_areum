package com.example.demo.service;

import com.example.demo.domain.Member;
import com.example.demo.repository.MemberJpaRepository;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.MemoryMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberJpaRepository memberRepository;

    public String join(Member member) {
        duplicateMemberCheck(member);
        memberRepository.save(member);
        return member.getId();
    }

//    private void duplicateMemberCheck(Member member) {
//        memberRepository.findbyId(member.getId()).
//                ifPresent(m -> {
//                    throw new IllegalStateException("already exists");
//                });
//    }

    private void duplicateMemberCheck(Member member) {
        memberRepository.findById(member.getMemberId()).
                ifPresent(m -> {
                    throw new IllegalStateException("already exists");
                });
    }


    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

//    public Optional<Member> findOne(String memberId) {
//        return memberRepository.findbyId(memberId);
//    }

    public Optional<Member> findOnd(Long memberId){
        return memberRepository.findById(memberId);
    }

}
