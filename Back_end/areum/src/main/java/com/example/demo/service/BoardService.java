package com.example.demo.service;


import com.example.demo.dto.BoardDto;
import com.example.demo.entity.Board;
import com.example.demo.entity.Member;
import com.example.demo.enumerate.BoardType;
import com.example.demo.repository.BoardJpaRepository;
import com.example.demo.repository.MemberJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.ListUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardJpaRepository boardRepository;
                
    public BoardDto getBoard(Long id){
        Optional<Board> board = boardRepository.findById(id);
        BoardDto boardDto = new BoardDto();
        boardDto.setTimeStamp(board.get().getTimeStamp());
        boardDto.setPageBody(board.get().getPageBody());
        boardDto.setPageName(board.get().getPageName());
        return boardDto;
    }

    public List<Board> getFiveLabList(){
        Optional<List<Board>> labList = boardRepository.findFivePost(BoardType.Lab);
        if(labList.isPresent()) return labList.get();
        else return new ArrayList<>();
    }

    public List<Board> getFiveClubList() {
        Optional<List<Board>> clubList = boardRepository.findFivePost(BoardType.Club);
        if(clubList.isPresent()) return clubList.get();
        else return new ArrayList<>();
    }

//    public List<Board> getFiveStudyList(){
//        Optional<List<Board>> studyList = boardRepository.findFivePost(BoardType.Study);
//        if(studyList.isPresent()) return studyList.get();
//        else return new ArrayList<>();
//    }

    public List<Board> getThreeLabList(){
        Optional<List<Board>> labList = boardRepository.findThreePost(BoardType.Lab);
        if(labList.isPresent()) return labList.get();
        else return new ArrayList<>();
    }

    public List<Board> getThreeClubList() {
        Optional<List<Board>> clubList = boardRepository.findThreePost(BoardType.Club);
        if(clubList.isPresent()) return clubList.get();
        else return new ArrayList<>();
    }

//    public List<Board> getThreeStudyList(){
//        Optional<List<Board>> studyList = boardRepository.findThreePost(BoardType.Study);
//        if(studyList.isPresent()) return studyList.get();
//        else return new ArrayList<>();
//    }
}
