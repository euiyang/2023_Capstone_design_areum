package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Entity
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name="study")
public class Study {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String studyName;
    private String studyTag;
    private Date studyTimeStamp;
    //private int studyParticipants; 필요한가?
    private int studyMaxParticipants;
    private int studyCurrentParticipants;
    private String studyArticle;
    //jdbc String <-> longtext

}


