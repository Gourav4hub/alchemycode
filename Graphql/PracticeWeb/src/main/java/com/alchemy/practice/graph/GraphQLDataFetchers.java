package com.alchemy.practice.graph;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alchemy.practice.service.PatientService;

import graphql.schema.DataFetcher;

@Component
public class GraphQLDataFetchers 
{
	@Autowired
	private PatientService patientService;
	
	public DataFetcher getPatients() 
	{
        return dataFetchingEnvironment -> {
        	String city = dataFetchingEnvironment.getArgument("city");
        	if(city==null || city.isEmpty())
        		return patientService.loadPatients();
        	else
        		return patientService.loadPatients(city);
        };
    }
	
	public DataFetcher getPatientsByGender() {
        return dataFetchingEnvironment -> {
        	String gender = dataFetchingEnvironment.getArgument("gender");
        	return patientService.loadPatientsByGender(gender);
        };
    }
}
