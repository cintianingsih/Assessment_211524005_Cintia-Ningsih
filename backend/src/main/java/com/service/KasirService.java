package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.model.Kasir;
import com.repository.KasirRepository;

@Service
public class KasirService {
    @Autowired
    KasirRepository kasirRepository;

    public List<Kasir> getAllBarang(){
		return kasirRepository.findAll();
	}

    public void addKasir(Kasir kasirRequest) {
		kasirRepository.save(kasirRequest);
	}

}
