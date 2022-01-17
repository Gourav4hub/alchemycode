package com.alchemy.patient.patientvisit.resources;

import java.util.ArrayList;
import java.util.Date;

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
import com.alchemy.patient.patientvisit.service.VisitService;

@RestController
@RequestMapping("/visit")
public class VisitController 
{
	@Autowired
	private VisitService visitService;
	
	@PostMapping("/save/{patientId}")
	public ResponseEntity saveVisit(@RequestBody PatientVisit visit, 
			@PathVariable String patientId) 
	{
		visit.setVisitDate(new Date());
		RestTemplate restTemplate = new RestTemplate();		
		String url = "http://localhost:8081/patient/get/"+patientId;
		Patient ob = restTemplate.postForEntity(url, null, Patient.class).getBody();
		
		if(ob.getVisitList()==null) 
		{
			ArrayList<PatientVisit> list = new ArrayList<PatientVisit>();
			list.add(visit);
			ob.setVisitList(list);
		}else {
			ob.getVisitList().add(visit);
		}		
		visitService.saveVisit(ob);
		return ResponseEntity.ok(visit);
	}
}
