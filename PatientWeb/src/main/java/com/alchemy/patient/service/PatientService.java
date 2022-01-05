package com.alchemy.patient.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.alchemy.patient.model.Patient;
import com.alchemy.patient.repository.PatientRepository;

@Service
public class PatientService 
{
	@Autowired
	private PatientRepository patientRepository;
	
	public Patient saveUser(Patient patient) 
	{
		try {
			patientRepository.insert(patient);		
			return patient;
		}catch(Exception ex) {
			return null;
		}
	}
	
	
	public List<Patient>  loadUsers() 
	{
		try {
			List<Patient> list =  patientRepository.findAll();
			return list;
		}catch(Exception ex) {
			return null;
		}
	}
}
