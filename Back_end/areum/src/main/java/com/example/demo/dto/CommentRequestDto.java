package com.example.demo.dto;

import com.example.demo.entity.Board;
import com.example.demo.entity.Comment;
import lombok.Builder;

import java.time.LocalDateTime;

public class CommentRequestDto {
    private String content;
    private String author;

    // 생성자
    public CommentRequestDto() {
    }

    public CommentRequestDto(String content, String author) {
        this.content = content;
        this.author = author;
    }

    // Getter
    public String getContent() {
        return content;
    }

    public String getAuthor() {
        return author;
    }

    // Setter
    public void setContent(String content) {
        this.content = content;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
