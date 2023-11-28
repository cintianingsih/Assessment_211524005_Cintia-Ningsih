package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.KasirService;
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

    @PostMapping("/update/kasir")
    public ResponseEntity<String> updateKasir(@RequestBody Kasir kasirRequest) {
        String namaKasir = kasirRequest.getNama();
        
        if (kasirService.getKasirById(kasirRequest.getKodekasir()) != null) {
            kasirService.updateKasir(kasirRequest);
            return ResponseEntity.ok("Kasir dengan nama " + namaKasir + " berhasil diupdate");
        } else {
            return ResponseEntity.badRequest().body("Barang dengan ID " + kasirRequest.getKodekasir() + " tidak ditemukan");
        }
    }

    @GetMapping("/kasir")
    public ResponseEntity<List<Kasir>> getAllKasir() {
        List<Kasir> allKasir = kasirService.getAllKasir();
        return ResponseEntity.ok(allKasir);
    }


    @DeleteMapping("/kasir/delete")
    public ResponseEntity<String> deleteKasir(@RequestParam String kodekasir) {
        String namaKasir = kasirService.getKasirById(kodekasir).getNama();
        
        if (kasirService.getKasirById(kodekasir) != null) {
            kasirService.deleteKasir(kodekasir);
            return ResponseEntity.ok("Barang dengan nama " + namaKasir + " berhasil dihapus");
        } else {
            return ResponseEntity.badRequest().body("Barang dengan ID " + kodekasir + " tidak ditemukan");
        }
    }

    @GetMapping("/kasir/{kodekasir}")
    public @ResponseBody Kasir getKasirById(@PathVariable("kodekasir") String kodekasir){
		return kasirService.getKasirById(kodekasir);
	}   
}
