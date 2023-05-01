package com.example.demo.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BoardDto {
    private Long id;
    private String pageName;
    private String pagePath;
    private Date pageTimeStamp;
}
