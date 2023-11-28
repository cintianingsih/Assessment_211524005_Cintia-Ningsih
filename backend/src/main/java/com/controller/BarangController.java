package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.service.BarangService;
import com.model.Barang;


@RestController
@CrossOrigin
public class BarangController {
    @Autowired
	BarangService barangService;
    
    @PostMapping("/insert/barang")
    public ResponseEntity<String> addBarang(@RequestBody Barang barangRequest) {
        String namaBarang = barangRequest.getNamabarang();
        barangService.addBarang(barangRequest);
        return ResponseEntity.ok("Barang dengan nama " + namaBarang + " berhasil ditambahkan");
    }
}