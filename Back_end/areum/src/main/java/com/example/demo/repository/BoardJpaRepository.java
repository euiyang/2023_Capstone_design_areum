package com.example.demo.repository;

import com.example.demo.entity.Board;
import com.example.demo.enumerate.BoardType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BoardJpaRepository extends JpaRepository<Board, Long> {
    Optional<List<Board>> findByBoardType(BoardType boardType);

    @Query(value="SELECT b FROM Board b WHERE b.boardType=:type ORDER BY b.timeStamp desc LIMIT 5")
    Optional<List<Board>> findFivePost(@Param("type") BoardType type);

    @Query(value="SELECT b FROM Board b WHERE b.boardType=:type ORDER BY b.timeStamp desc LIMIT 3")
    Optional<List<Board>> findThreePost(@Param("type") BoardType type);
}

//ORDER BY time_stamp desc LIMIT 3