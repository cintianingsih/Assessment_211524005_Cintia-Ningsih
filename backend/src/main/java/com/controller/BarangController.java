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

    @PostMapping("/update/barang")
    public ResponseEntity<String> updateBarang(@RequestBody Barang barangRequest) {
        String namaBarang = barangRequest.getNamabarang();
        
        if (barangService.getBarangById(barangRequest.getKodebarang()) != null) {
            barangService.updateBarang(barangRequest);
            return ResponseEntity.ok("Barang dengan nama " + namaBarang + " berhasil diupdate");
        } else {
            return ResponseEntity.badRequest().body("Barang dengan ID " + barangRequest.getKodebarang() + " tidak ditemukan");
        }
    }

    @DeleteMapping("/barang/delete")
    public ResponseEntity<String> deleteBarang(@RequestParam String kodebarang) {
        String namaBarang = barangService.getBarangById(kodebarang).getNamabarang();
        
        if (barangService.getBarangById(kodebarang) != null) {
            barangService.deleteBarang(kodebarang);
            return ResponseEntity.ok("Barang dengan nama " + namaBarang + " berhasil dihapus");
        } else {
            return ResponseEntity.badRequest().body("Barang dengan ID " + kodebarang + " tidak ditemukan");
        }
    }

    @GetMapping("/barang")
    public ResponseEntity<List<Barang>> getAllBarang() {
        List<Barang> allBarang = barangService.getAllBarang();
        return ResponseEntity.ok(allBarang);
    }
    
    @GetMapping("/barang/{kodebarang}")
    public @ResponseBody Barang getBarangById(@PathVariable("kodebarang") String kodebarang){
		return barangService.getBarangById(kodebarang);
	}
}