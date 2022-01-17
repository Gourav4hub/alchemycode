package com.alchemy.patient.patientvisit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.alchemy.patient.patientvisit.model.Patient;
import com.alchemy.patient.patientvisit.repository.PatientRepository;

@Service
public class VisitService 
{
	@Autowired
	private PatientRepository patientRepository;
	
	public boolean saveVisit(Patient patient) 
	{
		try {
			patientRepository.save(patient);
			return true;
		}catch(Exception ex) {
			return false;
		}
	}
}
