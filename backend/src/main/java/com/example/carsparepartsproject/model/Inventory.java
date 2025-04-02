package com.example.carsparepartsproject.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String partName;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String supplier;

    @Column(nullable = false)
    private Integer stockQuantity;

    @Column(nullable = false)
    private Double unitPrice;

    @Column(nullable = false)
    private Integer reorderLevel;

    @Column(nullable = false)
    private LocalDate lastRestocked;
}
