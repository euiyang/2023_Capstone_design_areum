package com.example.demo.controller;

import com.example.demo.dto.MyPageDto;
import com.example.demo.service.MyPageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MyPageController {

    Logger logger= LoggerFactory.getLogger(this.getClass());
    private final MyPageService myPageService;
    @GetMapping("/MyPage")
    public void modifyUser(MyPageDto myPageDto){

        logger.warn("mypage mod");
        logger.warn("{} {} {} {}",myPageDto.getName(),myPageDto.getEmail(),myPageDto.getMajor(),myPageDto.getPhone(),myPageDto.getId());
        myPageService.modify(myPageDto);
    }
}
