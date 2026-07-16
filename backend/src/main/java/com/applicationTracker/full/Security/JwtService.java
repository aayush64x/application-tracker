package com.applicationTracker.full.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;

import java.util.Date;

import static java.util.Base64.getDecoder;

@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration-ms}")
    private long expirationMs;

    private SecretKey getSigninKey(){
        byte[] keyBytes = getDecoder().decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    public String generateToken(String userId){
        Date now = new Date();
        Date expiry = new Date(now.getTime() + expirationMs);
        return Jwts.builder()
                .subject(userId)
                .issuedAt(now)
                .expiration(expiry)
                .signWith(getSigninKey())
                .compact();
    }

    public String extractUserId(String token){
        Claims claims = Jwts.parser()
                .verifyWith(getSigninKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();

        String userId = claims.getSubject();
        return userId;
    }

    public boolean validateToken(String token){
        try{
            Jwts.parser()
                    .verifyWith(getSigninKey())
                    .build()
                    .parseSignedClaims(token);
            return true;
        }
        catch (JwtException e){
            return false;
        }
    }
}