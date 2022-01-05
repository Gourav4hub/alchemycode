package com.alchemy.patient.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.alchemy.patient.model.Patient;

@Repository
public interface PatientRepository extends MongoRepository<Patient, String>{

}
