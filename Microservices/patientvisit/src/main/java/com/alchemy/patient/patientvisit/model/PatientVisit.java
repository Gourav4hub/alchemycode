package com.alchemy.patient.patientvisit.model;

import java.util.Date;

public class PatientVisit 
{
	private String visitId;
	private Date visitDate;
	private String type; // testing,consultancy
	
	public PatientVisit() {
		// TODO Auto-generated constructor stub
	}
	
	public PatientVisit(String visitId, Date visitDate, String type) {
		super();
		this.visitId = visitId;
		this.visitDate = visitDate;
		this.type = type;
	}



	public String getVisitId() {
		return visitId;
	}
	public void setVisitId(String visitId) {
		this.visitId = visitId;
	}
	public Date getVisitDate() {
		return visitDate;
	}
	public void setVisitDate(Date visitDate) {
		this.visitDate = visitDate;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "PatientVisit [visitId=" + visitId + ", visitDate=" + visitDate + ", type=" + type + "]";
	}
	
	
}
