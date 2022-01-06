package com.alchemy.patient.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alchemy.patient.model.Patient;
import com.alchemy.patient.repository.PatientRepository;
import com.alchemy.patient.response.ResponseData;
import com.alchemy.patient.service.PatientService;

@RestController
@CrossOrigin
@RequestMapping("/patient")
public class PatientController
{
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/save")
	public ResponseEntity savePatient(@RequestBody Patient patient) 
	{
		System.out.println(patient);
		Patient newPatient = patientService.savePatient(patient);	
		if(newPatient==null)
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);		
		else
			return ResponseEntity.ok(newPatient);
	}
	
	@PutMapping("/update")
	public ResponseEntity updatePatient(@RequestBody Patient patient) 
	{		
		Patient newPatient = patientService.updatePatient(patient);	
		if(newPatient==null)
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);		
		else
			return ResponseEntity.ok(newPatient);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity deletePatient(@PathVariable String id) 
	{		
		System.out.println(id);
		Patient patient = patientService.get(id);
		if(patient==null)
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);		
		else
		{
			boolean result = patientService.deletePatient(patient);
			if(result)
				return new ResponseEntity<>(HttpStatus.OK);	
			else
				return new ResponseEntity(HttpStatus.NOT_IMPLEMENTED);
		}
	}
	
	@GetMapping("/load")
	public ResponseEntity loadPatients() 
	{
		List<Patient> list =  patientService.loadPatients();
		return ResponseEntity.ok(list);
	}
}
