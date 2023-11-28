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
@Table(name = "kasir")
public class Kasir {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String kodekasir;

    @Column
    private String nama;

    @Column
    private String hp;

    // Getter and Setter methods for kodebarang
    public String getKodekasir() {
        return kodekasir;
    }

    public void setKodekasir(String kodekasir) {
        this.kodekasir = kodekasir;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getHp() {
        return hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }
    
}
