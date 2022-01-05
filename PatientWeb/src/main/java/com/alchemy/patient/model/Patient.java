package com.alchemy.patient.model;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@AllArgsConstructor
public class Patient 
{
	@Id
	private String patientId;
	private String patientName;
	private String patientPhone;
	private Integer patientAge;
	private String patientGender;
	
	
	
	
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




	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", patientName=" + patientName + ", patientPhone=" + patientPhone
				+ ", patientAge=" + patientAge + ", patientGender=" + patientGender + "]";
	}
	
	
}
