package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "barang")
public class Barang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String kodebarang;

    @Column
    private String namabarang;

    @Column
    private String satuan;

    @Column
    private String hargasatuan;

    @Column
    private String stok;

    // Getter and Setter methods for kodebarang
    public String getKodebarang() {
        return kodebarang;
    }

    public void setKodebarang(String kodebarang) {
        this.kodebarang = kodebarang;
    }

    // Getter and Setter methods for namabarang
    public String getNamabarang() {
        return namabarang;
    }

    public void setNamabarang(String namabarang) {
        this.namabarang = namabarang;
    }

    // Getter and Setter methods for satuan
    public String getSatuan() {
        return satuan;
    }

    public void setSatuan(String satuan) {
        this.satuan = satuan;
    }

    // Getter and Setter methods for hargasatuan
    public String getHargasatuan() {
        return hargasatuan;
    }

    public void setHargasatuan(String hargasatuan) {
        this.hargasatuan = hargasatuan;
    }

    // Getter and Setter methods for stok
    public String getStok() {
        return stok;
    }

    public void setStok(String stok) {
        this.stok = stok;
    }
}
