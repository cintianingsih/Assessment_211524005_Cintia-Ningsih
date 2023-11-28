package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.model.Tenan;
import com.repository.TenanRepository;

@Service
public class TenanService {

    @Autowired
    private TenanRepository tenanRepository;

    public List<Tenan> getAllTenan(){
		return tenanRepository.findAll();
	}

    public Tenan getTenanById(String kodetenan) {
		return tenanRepository.getById(kodetenan);
	}

    public void addTenan(Tenan tenanRequest) {
		tenanRepository.save(tenanRequest);
	}
    
	public void updateTenan(Tenan tenanRequest) {
		tenanRepository.save(tenanRequest);
	}

	public void deleteTenan(String kodetenan) {
		tenanRepository.deleteById(kodetenan);
	}
}