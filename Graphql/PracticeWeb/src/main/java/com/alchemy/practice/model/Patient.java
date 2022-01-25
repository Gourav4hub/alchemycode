package com.alchemy.practice.model;

import java.util.List;

import org.springframework.data.annotation.Id;

public class Patient 
{
	@Id
	private String patientId;
	private String patientName;
	private String patientPhone;
	private Integer patientAge;
	private String patientGender;
	private String patientCity;
	
	public void setPatientCity(String patientCity) {
		this.patientCity = patientCity;
	}
	
	public String getPatientCity() {
		return patientCity;
	}
	
	public String getPatientId() {
		return patientId;
	}




	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}




	public String getPatientName() {
		return patientName;
	}




	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}




	public String getPatientPhone() {
		return patientPhone;
	}




	public void setPatientPhone(String patientPhone) {
		this.patientPhone = patientPhone;
	}




	public Integer getPatientAge() {
		return patientAge;
	}




	public void setPatientAge(Integer patientAge) {
		this.patientAge = patientAge;
	}




	public String getPatientGender() {
		return patientGender;
	}




	public void setPatientGender(String patientGender) {
		this.patientGender = patientGender;
	}

}
