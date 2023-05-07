package com.example.demo.repository;

import com.example.demo.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BoardJpaRepository extends JpaRepository<Board, Long> {
}
