package com.example.demo.dto;

import com.example.demo.entity.Comment;

public class CommentResponseDto {
    private Long id;
    private String content;
    private String author;

    // 생성자
    public CommentResponseDto() {
    }

    public CommentResponseDto(Comment comment) {
        this.id = comment.getId();
        this.content = comment.getContent();
        this.author = comment.getAuthor();
    }

    //Getter
    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public String getAuthor() {
        return author;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

}
