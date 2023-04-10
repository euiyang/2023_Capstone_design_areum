package com.example.demo.controller;

import com.example.demo.domain.Member;
import com.example.demo.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class MemberController {

    //private final PasswordEncoder passwordEncoder = null;

    private final MemberService memberService;

    @GetMapping("/members/new")
    public String createForm() {
        return "members/createMemberForm";
    }

    @PostMapping("members/new")
    public String create(MemberForm form) {

        Member member = new Member();
        member.setId(form.getId());
        //hashing w/ SHA256
//        String hashedPw;
//        hashedPw = passwordEncoder.encode(form.getPw());
//        member.setPw(hashedPw);
        //
        member.setPw(form.getPw());
        member.setName(form.getName());
        member.setEmail(form.getEmail());
        member.setPhone(form.getPhone());
        member.setMajor(form.getMajor());

        memberService.join(member);


        return "redirect:/";
    }


    @GetMapping("/members")
    public String list(Model model) {
        List<Member> members = memberService.findMembers();
        model.addAttribute("members", members);
        return "members/memberList";
    }


}
