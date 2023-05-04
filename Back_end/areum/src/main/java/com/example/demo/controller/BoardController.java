package com.example.demo.controller;

import com.example.demo.dto.BoardDto;
import com.example.demo.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    BoardDto boardDto;

    @RequestMapping("/request-param/{path}")
    public String requestParam(@PathVariable("path") String path) {
        return null; // should be fixed
    }

}
