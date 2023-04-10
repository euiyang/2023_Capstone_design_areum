package com.example.demo.domain;

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
    private Long memberId;
    private String id;
    private String pw;
    private String name;
    private String email;
    private String phone;
    private String major;

}


