package com.example.carsparepartsproject.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateInventoryRequestDTO {
    private String partName;
    private String category;
    private String brand;
    private String supplier;
    private Integer stockQuantity;
    private Double unitPrice;
    private Integer reorderLevel;
}
