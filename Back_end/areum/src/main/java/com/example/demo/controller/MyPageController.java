package com.example.demo.controller;

import com.example.demo.dto.MyPageDto;
import com.example.demo.service.MyPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MyPageController {
    private final MyPageService myPageService;
    @GetMapping("/MyPage")
    public void modifyUser(MyPageDto myPageDto){
        myPageService.modify(myPageDto);
    }
}
