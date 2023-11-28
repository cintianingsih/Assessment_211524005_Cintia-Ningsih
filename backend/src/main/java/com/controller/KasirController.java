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

import com.service.KasirService;
import com.model.Barang;
import com.model.Kasir;


@RestController
@CrossOrigin
public class KasirController {
    @Autowired
	KasirService kasirService;
    
    @PostMapping("/insert/kasir")
    public ResponseEntity<String> addKasir(@RequestBody Kasir kasirRequest) {
        String namaKasir = kasirRequest.getNama();
        kasirService.addKasir(kasirRequest);
        return ResponseEntity.ok("Kasir dengan nama " + namaKasir + " berhasil ditambahkan");
    }

}