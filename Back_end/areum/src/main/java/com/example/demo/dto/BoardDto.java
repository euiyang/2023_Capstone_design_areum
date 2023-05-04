package com.example.demo.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BoardDto {
    private Long id;
    private Date timeStamp;
    private String pageName;
    private String pageBody;

    public BoardDto(Long id) {
        this.id = id;
    } // 이렇게 해도되는가?
}
