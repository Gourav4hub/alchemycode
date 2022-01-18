package com.alchemy.patient.patientvisit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class PatientvisitApplication {
	

	@Bean
	public RestTemplate getTemplate() 
	{
		return new RestTemplate();
	}

	public static void main(String[] args) {
		SpringApplication.run(PatientvisitApplication.class, args);
	}

}
