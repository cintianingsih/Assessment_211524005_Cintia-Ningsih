package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.model.Barang;
import com.repository.BarangRepository;

@Service
public class BarangService {
    @Autowired
    BarangRepository barangRepository;

    public List<Barang> getAllBarang(){
		return barangRepository.findAll();
	}

  public Barang getBarangById(String kodebarang) {
		return barangRepository.getById(kodebarang);
	}

    public void addBarang(Barang barangRequest) {
		barangRepository.save(barangRequest);
	}

  	public void updateBarang(Barang barangRequest) {
		barangRepository.save(barangRequest);
	}

  public void deleteBarang(String kodebarang) {
		barangRepository.deleteById(kodebarang);
	}

}
