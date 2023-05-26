package com.example.demo.security;

import com.example.demo.config.JwtFilter;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.GenericFilter;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TokenProviderTest {

    @Autowired
    private TokenProvider tokenProvider;

    @Test
    void create() {
        String token = tokenProvider.create("123");

        System.out.println("token = " + token);

        Authentication authentication = tokenProvider.getAuthentication(token);
        System.out.println(authentication.getName());

        System.out.println(authentication.isAuthenticated());
    }
}