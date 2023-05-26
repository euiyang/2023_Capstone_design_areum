package com.example.demo.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthoritiesContainer;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;

@Component
public class TokenProvider {

    @Value("${spring.jwt.secret}")
    private String SECRET_KEY;

    public String create(String username) {

        // 기한은 지금부터 1일로 설정
        Date expiryDate = Date.from(
                Instant.now()
                        .plus(1, ChronoUnit.DAYS));

        // JWT Token 생성
        return Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)        // exp
                .compact();
    }

    public boolean validateToken(String token) {
        try{
            Jws<Claims> claim = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return !claim.getBody().getExpiration().before(new Date());
        }catch (Exception e){
            return false;
        }
    }

    public Authentication getAuthentication(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();

        String username = claims.getSubject();

        List<GrantedAuthority> list=new LinkedList<>();
        list.add(new SimpleGrantedAuthority("user"));

        return new UsernamePasswordAuthenticationToken(username,token, list);

    }
}