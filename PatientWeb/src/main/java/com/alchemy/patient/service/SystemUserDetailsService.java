package com.alchemy.patient.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.alchemy.patient.model.Patient;
import com.alchemy.patient.model.SystemUser;
import com.alchemy.patient.model.SystemUserDetails;
import com.alchemy.patient.repository.PatientRepository;
import com.alchemy.patient.repository.SystemUserRepository;


@Service
public class SystemUserDetailsService implements UserDetailsService 
{
	@Autowired
	SystemUserRepository userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException 
	{
		SystemUser user = userRepo.findByEmail(email);
		System.out.println("user : "+user);
		
		return new SystemUserDetails(user);
	}
}
