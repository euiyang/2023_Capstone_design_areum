package com.example.demo.controller;

import com.example.demo.dto.CommentRequestDto;
import com.example.demo.dto.CommentResponseDto;
import com.example.demo.service.CommentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // 댓글 생성
    @PostMapping
    public Long create(@RequestBody CommentRequestDto requestDto) {
        return commentService.save(requestDto);
    }

    // 댓글 조회
    @GetMapping("/{id}")
    public CommentResponseDto read(@PathVariable Long id) {
        return commentService.findById(id);
    }

    // 댓글 수정
    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody CommentRequestDto requestDto) {
        return commentService.update(id, requestDto);
    }

    // 댓글 삭제
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        commentService.delete(id);
    }
}

//  댓글 생성: POST /post/comments
//  댓글 조회: GET /post/comments/{id}
//  댓글 수정: PUT /post/comments/{id}
//  댓글 삭제: DELETE /post/comments/{id}