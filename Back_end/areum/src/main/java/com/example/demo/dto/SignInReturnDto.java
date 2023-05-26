package com.example.demo.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class SignInReturnDto {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String major;
}
