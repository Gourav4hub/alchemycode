package com.alchemy.practice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.alchemy.practice.model.Patient;
import com.alchemy.practice.repository.PatientRepository;
@Service
public class PatientService 
{
	@Autowired
	private PatientRepository patientRepository;
	
	public Patient savePatient(Patient patient) 
	{
		try {
			patientRepository.insert(patient);		
			return patient;
		}catch(Exception ex) {
			return null;
		}
	}
	
	public Patient updatePatient(Patient patient) 
	{
		try {
			patientRepository.save(patient);			
			return patient;
		}catch(Exception ex) {
			System.out.println(ex);
			return null;
		}
	}
	
	public Boolean deletePatient(Patient patient) 
	{
		try {
			patientRepository.delete(patient);				
			return true;
		}catch(Exception ex) {
			return false;
		}
	}
	
	public Patient get(String id) 
	{
		try {			
			return patientRepository.findById(id).get();
		}catch(Exception ex) {
			return null;
		}
	}
	
	
	public List<Patient>  loadPatients() 
	{
		try {
			List<Patient> list =  patientRepository.findAll();
			return list;
		}catch(Exception ex) {
			return null;
		}
	}
	
	public List<Patient>  loadPatients(String city) 
	{
		try {
			List<Patient> list =  patientRepository.findByPatientCity(city);
			return list;
		}catch(Exception ex) {
			return null;
		}
	}
	
	public List<Patient>  loadPatientsByGender(String gender) 
	{
		try {
			List<Patient> list =  patientRepository.findByPatientGender(gender);
			return list;
		}catch(Exception ex) {
			return null;
		}
	}
}
