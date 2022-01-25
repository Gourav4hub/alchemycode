package com.alchemy.practice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.alchemy.practice.model.Patient;


@Repository
public interface PatientRepository extends MongoRepository<Patient, String>{
	List<Patient> findByPatientCity(String patientCity);
	List<Patient> findByPatientGender(String patientGender);
}
