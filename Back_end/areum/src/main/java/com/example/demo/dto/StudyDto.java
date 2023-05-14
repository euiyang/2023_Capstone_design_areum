package com.example.demo.dto;

import lombok.Data;

import java.util.Date;

@Data
public class StudyDto {
    private Long id;
    private String studyName;
    private String studyTag;
    private Date studyTimeStamp;
    private int studyMaxParticipants;
    private int studyCurrentParticipants;
    private String studyArticle;
}
