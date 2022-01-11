package com.alchemy.patient.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.alchemy.patient.model.Patient;
import com.alchemy.patient.model.SystemUser;
import com.alchemy.patient.repository.PatientRepository;
import com.alchemy.patient.repository.SystemUserRepository;

@Service
public class SystemUserService 
{
	@Autowired
	private SystemUserRepository userRepository;
	
	public SystemUser saveUser(SystemUser user) 
	{
		try {
			user.setRoles("ROLE_ADMIN");
			user.setIsActive(true);
			userRepository.insert(user);		
			return user;
		}catch(Exception ex) {
			return null;
		}
	}
	public SystemUser getById(String userid) 
	{
		return userRepository.findById(userid).get();	
	}
	public SystemUser getByEmail(String email) 
	{
		return userRepository.findByEmail(email);		
	}
}
