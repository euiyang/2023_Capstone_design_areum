package com.example.demo.repository;

import com.example.demo.entity.Board;
import com.example.demo.enumerate.BoardType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardJpaRepository extends JpaRepository<Board, Long> {
    Optional<List<Board>> findByBoardType(BoardType boardType);
}
