package com.example.demo.service;

import com.example.demo.entity.Board;
import com.example.demo.enumerate.BoardType;
import com.example.demo.repository.BoardJpaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Date;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class SettingTest {
    @Autowired
    private BoardJpaRepository boardJpaRepository;

    @Test
    public void setBoardData(){

        Board b1 = Board.builder()
                .boardType(BoardType.Club)
                .timeStamp(new Date(2023,12,25,10,10,10))
                .pageName("basketball")
                .pageBody("안녕하세요 농구 동아리입니다")
                .build();

        Board b2 = Board.builder()
                .boardType(BoardType.Club)
                .timeStamp(new Date(2023,12,25,10,10,11))
                .pageName("soccer")
                .pageBody("안녕하세요 축구 동아리입니다")
                .build();

        Board b3 = Board.builder()
                .boardType(BoardType.Club)
                .timeStamp(new Date(2023,12,25,10,10,12))
                .pageName("foot volleyball")
                .pageBody("안녕하세요 족구 동아리입니다")
                .build();

        Board b4 = Board.builder()
                .boardType(BoardType.Club)
                .timeStamp(new Date(2023,12,25,10,10,13))
                .pageName("kendo")
                .pageBody("안녕하세요 검도 동아리입니다")
                .build();

        Board b5 = Board.builder()
                .boardType(BoardType.Club)
                .timeStamp(new Date(2023,12,25,10,10,14))
                .pageName("tea")
                .pageBody("안녕하세요 다도 동아리입니다")
                .build();

        Board b6 = Board.builder()
                .boardType(BoardType.Club)
                .timeStamp(new Date(2023,12,25,10,10,15))
                .pageName("kickboxing")
                .pageBody("안녕하세요 킥복싱 동아리입니다")
                .build();

        Board b7 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,16))
                .pageName("bear")
                .pageBody("안녕하세요 곰 연구실입니다")
                .build();

        Board b8 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,17))
                .pageName("door")
                .pageBody("안녕하세요 문 연구실입니다")
                .build();

        Board b9 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,18))
                .pageName("babo")
                .pageBody("안녕하세요 바보 연구실입니다")
                .build();
        Board b10 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,19))
                .pageName("genius")
                .pageBody("안녕하세요 천재 연구실입니다")
                .build();

        Board b11 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,20))
                .pageName("cola")
                .pageBody("안녕하세요 콜라 연구실입니다")
                .build();

        Board b12 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,21))
                .pageName("cider")
                .pageBody("안녕하세요 사이다 연구실입니다")
                .build();


        boardJpaRepository.save(b1);
        boardJpaRepository.save(b2);
        boardJpaRepository.save(b3);
        boardJpaRepository.save(b4);
        boardJpaRepository.save(b5);
        boardJpaRepository.save(b6);
        boardJpaRepository.save(b7);
        boardJpaRepository.save(b8);
        boardJpaRepository.save(b9);
        boardJpaRepository.save(b10);
        boardJpaRepository.save(b11);
        boardJpaRepository.save(b12);
    }
}
