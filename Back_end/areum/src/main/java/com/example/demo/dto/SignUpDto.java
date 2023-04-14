package com.example.demo.dto;

import lombok.Data;

@Data
public class SignUpDto {
    private String id;
    private String pw;
    private String name;
    private String email;
    private String phone;
    private String major;
}
