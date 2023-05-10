package com.example.demo.entity;

import com.example.demo.dto.CommentRequestDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity(name= "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;
    private String author;

    public Comment(CommentRequestDto requestDto) {
        this.content = requestDto.getContent();
        this.author = requestDto.getAuthor() != null ? requestDto.getAuthor() : "Annonymous";
    }

    public void update(String content) {
        this.content = content;
    }
}
