package com.example.demo.repository;

import com.example.demo.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemoryMemberRepository implements MemberRepository{

    private static Map<String, Member> store = new HashMap<>();


    @Override
    public Member save(Member member) {
        store.put(member.getId(),member);
        return member;
    }

    @Override
    public Optional<Member> findbyId(String id) {
        return Optional.ofNullable(store.get(id));
    }


    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }
}
