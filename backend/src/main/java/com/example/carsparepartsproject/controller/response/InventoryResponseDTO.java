package com.example.carsparepartsproject.controller.response;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class InventoryResponseDTO {
    private Long id;
    private String partName;
    private String category;
    private String brand;
    private String supplier;
    private Integer stockQuantity;
    private Double unitPrice;
    private Integer reorderLevel;
    private LocalDate lastRestocked;
}
