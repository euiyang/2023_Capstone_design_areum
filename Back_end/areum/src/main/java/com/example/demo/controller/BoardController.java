package com.example.demo.controller;

import com.example.demo.dto.BoardDto;
import com.example.demo.dto.StudyDto;
import com.example.demo.entity.Board;
import com.example.demo.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/board/{pageId}")
    public BoardDto requestParam(@PathVariable("pageId") Long id) {
        return boardService.getBoard(id);
    }

    @GetMapping("/lab")
    public List<Board> getLabList(){
        return boardService.getFiveLabList();
    }

    @GetMapping("/club")
    public List<Board> getClubList(){
        return boardService.getFiveClubList();
    }

    @GetMapping("/lab/home")
    public List<Board> getThreeLabList(){
        return boardService.getThreeLabList();
    }

    @GetMapping("/club/home")
    public List<Board> getThreeClubList(){
        return boardService.getThreeClubList();
    }

    @GetMapping("/study")
    public List<Board> getStudyList(){
        return boardService.getFiveStudyList();
    }

    @GetMapping("/study/home")
    public List<Board> getThreeStudyList(){
        return boardService.getThreeStudyList();
    }

    @PostMapping("/study/post")
    public void postBoard(StudyDto studyDto){
        boardService.postBoard(studyDto);
    }
}