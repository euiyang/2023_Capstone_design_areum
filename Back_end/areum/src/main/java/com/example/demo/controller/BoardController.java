package com.example.demo.controller;

import com.example.demo.dto.BoardDto;
import com.example.demo.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/board/{id}")
    public String viewBoard(@PathVariable Long id) {
        BoardDto boardDto = new BoardDto(id);
        return boardService.viewBoard(boardDto);
    }
}