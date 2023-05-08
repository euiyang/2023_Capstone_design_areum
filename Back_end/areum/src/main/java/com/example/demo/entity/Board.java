package com.example.demo.entity;

import com.example.demo.enumerate.BoardType;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Getter
@Entity
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Board {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(value=EnumType.STRING)
    private BoardType boardType;

    private Date timeStamp;
    private String pageName;
    private String pageBody;
}

