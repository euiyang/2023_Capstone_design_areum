package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


//시작시 콘솔 로그인 비활
@SpringBootApplication
@EnableAutoConfiguration(exclude={SecurityAutoConfiguration.class})
public class AreumApplication {

	public static void main(String[] args) {
		SpringApplication.run(AreumApplication.class, args);
	}

}
