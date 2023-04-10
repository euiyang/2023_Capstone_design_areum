package com.example.demo.controller;


import com.example.demo.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClubController {
    @Autowired
    private MemberService memberService;

    @GetMapping("/clubs/clublist")
    public String ClubList() {
        return "clubs/clublist";
    }

    @GetMapping("/clubs/aegis")
    public String Aegis() {
        return "clubs/aegis";
    }

    @GetMapping("/clubs/basketball")
    public String Basketball() {
        return "clubs/basketball";
    }

    @GetMapping("/clubs/football")
    public String Football() {
        return "clubs/football";
    }


}
