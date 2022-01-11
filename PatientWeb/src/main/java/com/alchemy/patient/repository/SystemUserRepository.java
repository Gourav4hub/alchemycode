package com.alchemy.patient.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.alchemy.patient.model.Patient;
import com.alchemy.patient.model.SystemUser;

@Repository
public interface SystemUserRepository extends MongoRepository<SystemUser, String>{
	public SystemUser findByEmail(String email);
}
