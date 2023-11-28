package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Id;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Tenan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "kode_tenan")
    private String kodeTenan;

    @Column(name = "nama_tenan")
    private String namaTenan;

    @Column
    private String hp;

    public String getKodeTenan() {
        return kodeTenan;
    }

    public void setKodeTenan(String kodeTenan) {
        this.kodeTenan = kodeTenan;
    }

    public String getNamaTenan() {
        return namaTenan;
    }

    public void setNamaTenan(String namaTenan) {
        this.namaTenan = namaTenan;
    }

    public String getHp() {
        return hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }
}