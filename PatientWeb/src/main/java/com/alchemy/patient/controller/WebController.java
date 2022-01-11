package com.alchemy.patient.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alchemy.patient.model.Patient;
import com.alchemy.patient.model.SystemUser;
import com.alchemy.patient.response.JWTResponseData;
import com.alchemy.patient.security.JwtTokenUtil;
import com.alchemy.patient.service.SystemUserService;

@RestController
@RequestMapping("/web")
public class WebController 
{
	@Autowired
	private SystemUserService userService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
    @Autowired
    PasswordEncoder passwordEncoder;

	@Autowired
	private UserDetailsService userDetailsService;

	@PostMapping("/register")
	public ResponseEntity saveUser(@RequestBody SystemUser user) 
	{
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		SystemUser newUser = userService.saveUser(user);
		if (newUser == null)
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		else
			return ResponseEntity.ok(newUser);
	}

	@PostMapping("/login")
	public ResponseEntity login(@RequestBody SystemUser user) 
	{
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

			SystemUser newUser = userService.getByEmail(user.getEmail());
			final String token = jwtTokenUtil.generateToken(newUser);

			return ResponseEntity.ok(new JWTResponseData(true, token, "Login Successfully"));
		} catch (DisabledException e) {
			return ResponseEntity.ok(new JWTResponseData(false, "", "User Disabled !"));
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok(new JWTResponseData(false, "", "Invalid User !"));
		}
	}
	
	
}
