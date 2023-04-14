package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Member {

    @Id @GeneratedValue
    private Long id;
    private String memberId;
    private String memberPw;
    private String name;
    private String email;
    private String phone;
    private String major;

}


