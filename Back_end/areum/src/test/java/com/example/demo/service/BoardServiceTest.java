package com.example.demo.service;

import com.example.demo.entity.Board;
import com.example.demo.enumerate.BoardType;
import com.example.demo.repository.BoardJpaRepository;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@RequiredArgsConstructor
class BoardServiceTest {
    @Autowired
    private BoardJpaRepository boardJpaRepository;

    @Test
    public void boardTest(){

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
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,12))
                .pageName("bear")
                .pageBody("안녕하세요 곰 연구실입니다")
                .build();

        Board b4 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,13))
                .pageName("door")
                .pageBody("안녕하세요 문 연구실입니다")
                .build();


        boardJpaRepository.save(b1);
        boardJpaRepository.save(b2);
        boardJpaRepository.save(b3);
        boardJpaRepository.save(b4);

        List<Board> list = boardJpaRepository.findAll();
        for (Board b :
                list) {
            System.out.println("b.getTimeStamp() = " + b.getTimeStamp());
            System.out.println("b.getPageName() = " + b.getPageName());
            System.out.println("b.getPageBody() = " + b.getPageBody());
        }
    }

    @Test
    public void getList(){

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
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,12))
                .pageName("bear")
                .pageBody("안녕하세요 곰 연구실입니다")
                .build();

        Board b4 = Board.builder()
                .boardType(BoardType.Lab)
                .timeStamp(new Date(2023,12,25,10,10,13))
                .pageName("door")
                .pageBody("안녕하세요 문 연구실입니다")
                .build();


        boardJpaRepository.save(b1);
        boardJpaRepository.save(b2);
        boardJpaRepository.save(b3);
        boardJpaRepository.save(b4);

        Optional<List<Board>> clubList = boardJpaRepository.findByBoardType(BoardType.Club);

        for (Board b : clubList.get()) {
            System.out.println("b.getTimeStamp() = " + b.getTimeStamp());
            System.out.println("b.getPageName() = " + b.getPageName());
            System.out.println("b.getPageBody() = " + b.getPageBody());
        }


        Optional<List<Board>> labList = boardJpaRepository.findByBoardType(BoardType.Lab);

        for (Board b : labList.get()) {
            System.out.println("b.getTimeStamp() = " + b.getTimeStamp());
            System.out.println("b.getPageName() = " + b.getPageName());
            System.out.println("b.getPageBody() = " + b.getPageBody());
        }
    }
}