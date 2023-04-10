package dto;

import lombok.Data;

@Data
public class UserDTO {
    private String token;
    private String id;
    private String pw;
    private String name;
    private String email;
    private String phone;
    private String major;
}
