package com.example.demo.repository;

import com.example.demo.dto.MyPageDto;
import com.example.demo.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface MemberJpaRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByMemberId(String id);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value="UPDATE Member m SET m.name = :name,m.email=:email, m.major = :major,m.phone=:phone WHERE m.id = :id")
    void modifyMember(String name,String email,String major,String phone,Long id);
}
