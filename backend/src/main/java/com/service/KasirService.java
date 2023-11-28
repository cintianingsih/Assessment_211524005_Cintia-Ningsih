package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.model.Barang;
import com.model.Kasir;
import com.repository.KasirRepository;

@Service
public class KasirService {
    @Autowired
    KasirRepository kasirRepository;

    public List<Kasir> getAllKasir(){
		return kasirRepository.findAll();
	}

    public Kasir getKasirById(String kodekasir) {
		return kasirRepository.getById(kodekasir);
	}

    public void addKasir(Kasir kasirRequest) {
		kasirRepository.save(kasirRequest);
	}
    
	public void updateKasir(Kasir kasirRequest) {
		kasirRepository.save(kasirRequest);
	}

}
