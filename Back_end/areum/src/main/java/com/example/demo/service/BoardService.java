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

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardJpaRepository boardRepository;
                
    public BoardDto viewBoard(Long id){
        Optional<Board> board = boardRepository.findById(id);
        BoardDto boardDto = new BoardDto();
        boardDto.setTimeStamp(board.get().getTimeStamp());
        boardDto.setPageBody(board.get().getPageBody());
        boardDto.setPageName(board.get().getPageName());
        return boardDto;
    }

//    public List<Board> getLabList(){
//        Optional<List<Board>> labList = boardRepository.findByBoardType(BoardType.Lab);
//
//
//        return labList;
//    }
//
//    public List<Board> getClubList() {
//        Optional<List<Board>> labList = boardRepository.findByBoardType(BoardType.Club);
//
//
//
//        return list;
//    }
}
