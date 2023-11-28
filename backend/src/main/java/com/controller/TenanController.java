package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

import com.service.TenanService;
import com.model.Kasir;
import com.model.Tenan;

@RestController
@CrossOrigin
public class TenanController {

    @Autowired
    private TenanService tenanService;

    @PostMapping("/insert/tenan")
    public ResponseEntity<String> addTenan(@RequestBody Tenan tenanRequest) {
        String namaKasir = tenanRequest.getNamatenan();
        tenanService.addTenan(tenanRequest);
        return ResponseEntity.ok("Tenan dengan nama " + namaKasir + " berhasil ditambahkan");
    }

    @PostMapping("/update/tenan")
    public ResponseEntity<String> updateTenan(@RequestBody Tenan tenanRequest) {
        String namaKasir = tenanRequest.getNamatenan();
        
        if (tenanService.getTenanById(tenanRequest.getKodetenan()) != null) {
            tenanService.updateTenan(tenanRequest);
            return ResponseEntity.ok("Tenan dengan nama " + namaKasir + " berhasil diupdate");
        } else {
            return ResponseEntity.badRequest().body("Barang dengan ID " + tenanRequest.getKodetenan() + " tidak ditemukan");
        }
    }


    @GetMapping("/tenan")
    public ResponseEntity<List<Tenan>> getAllTenan() {
        List<Tenan> allTenan = tenanService.getAllTenan();
        return ResponseEntity.ok(allTenan);
    }

    @DeleteMapping("/tenan/delete")
    public ResponseEntity<String> deleteTenan(@RequestParam String kodetenan) {
        String namaTenan = tenanService.getTenanById(kodetenan).getNamatenan();
        
        if (tenanService.getTenanById(kodetenan) != null) {
            tenanService.deleteTenan(kodetenan);
            return ResponseEntity.ok("Tenan dengan nama " + namaTenan + " berhasil dihapus");
        } else {
            return ResponseEntity.badRequest().body("Barang dengan ID " + kodetenan + " tidak ditemukan");
        }
    }
}