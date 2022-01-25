package com.alchemy.practice.controller;



import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.alchemy.practice.graph.GraphQlProvider;
import com.alchemy.practice.model.Patient;
import com.alchemy.practice.service.PatientService;

import graphql.ExecutionResult;

@RestController
@CrossOrigin
@RequestMapping("/patient")
public class PatientController
{
	@Autowired
	private PatientService patientService;
	
	@Autowired
	private GraphQlProvider graphQLService;
		
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
	
	@PostMapping("/load")
	public ResponseEntity loadPatients(@RequestBody String query) 
	{	
		System.out.println(query);
		ExecutionResult result =  graphQLService.graphQL().execute(query);
		Map<String, String> obj =  result.getData();
		return ResponseEntity.ok(obj);
	}
}
