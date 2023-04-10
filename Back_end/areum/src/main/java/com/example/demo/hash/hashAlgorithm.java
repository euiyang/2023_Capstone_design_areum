package com.example.demo.hash;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class hashAlgorithm {
    public byte[] sha256(String pw, byte[] salt) throws UnsupportedEncodingException, NoSuchAlgorithmException {

        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        digest.reset();
        return digest.digest(pw.getBytes("UTF-8"));
    }

    public String bytesToHex(byte[] hash) {

        StringBuilder builder = new StringBuilder();
        for (byte b : hash) {
            builder.append(String.format("%02x", b));
        }

        return builder.toString();
    }



}
