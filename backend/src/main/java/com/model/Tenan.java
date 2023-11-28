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
@Table(name = "tenan")
public class Tenan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String kodetenan;

    @Column
    private String namatenan;

    @Column
    private String hp;

    // Getter and Setter methods for kodebarang
    public String getKodetenan() {
        return kodetenan;
    }

    public void setKodetenan(String kodetenan) {
        this.kodetenan = kodetenan;
    }

    public String getNamatenan() {
        return namatenan;
    }

    public void setNamatenan(String namatenan) {
        this.namatenan= namatenan;
    }

    public String getHp() {
        return hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }
    
}
