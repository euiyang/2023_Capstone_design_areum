package com.example.demo.controller;

import com.example.demo.domain.Member;
import com.example.demo.service.MemberService;
import dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class LoginController {

    @Autowired
    private MemberService memberService;

    //@Autowired
    //private TokenProvider tokenProvider;



    @GetMapping("/members/login")
    public String login() {
        return "members/loginForm";
    }


    @PostMapping("members/loginProc")
    public String login(String inputId, String inputPw) {

        Member member = null;


        if (inputId.equals(member.getId())  && inputPw.equals(member.getPw())) {
            return "redirect:/";
        } else {
            return "members/login";
        }
    }

}
