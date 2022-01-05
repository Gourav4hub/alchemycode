package com.alchemy.patient.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alchemy.patient.model.Patient;
import com.alchemy.patient.repository.PatientRepository;
import com.alchemy.patient.service.PatientService;

@RestController
@RequestMapping("/patient")
public class PatientController
{
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/save")
	public ResponseEntity saveUser(@RequestBody Patient patient) 
	{
		System.out.println(patient);
		Patient newPatient = patientService.saveUser(patient);	
		if(newPatient==null)
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);		
		else
			return ResponseEntity.ok(newPatient);
	}
	
	@GetMapping("/load")
	public ResponseEntity loadUsers() 
	{
		List<Patient> list =  patientService.loadUsers();
		return ResponseEntity.ok(list);
	}
}
