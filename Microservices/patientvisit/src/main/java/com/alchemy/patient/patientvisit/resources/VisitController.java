package com.alchemy.patient.patientvisit.resources;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.alchemy.patient.patientvisit.model.Patient;
import com.alchemy.patient.patientvisit.model.PatientVisit;
import com.alchemy.patient.patientvisit.response.VisitResponse;
import com.alchemy.patient.patientvisit.service.VisitService;

@RestController
@RequestMapping("/visit")
public class VisitController 
{
	@Autowired
	private VisitService visitService;
	
	@PostMapping("/save")
	public ResponseEntity saveVisit(@RequestBody PatientVisit visit) 
	{			
		visitService.saveVisit(visit);
		return ResponseEntity.ok(visit);
	}
	
	@PostMapping("/userVisit/{patientId}")
	public VisitResponse list(@PathVariable String patientId)
	{
		List<PatientVisit> visitList = visitService.list(patientId);
		return new VisitResponse(visitList);
	}
}
