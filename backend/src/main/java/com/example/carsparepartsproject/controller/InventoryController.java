package com.example.carsparepartsproject.controller;

import com.example.carsparepartsproject.controller.request.CreateInventoryRequestDTO;
import com.example.carsparepartsproject.controller.response.InventoryResponseDTO;
import com.example.carsparepartsproject.service.InventoryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class InventoryController {
    private InventoryService inventoryService;

    @PostMapping("/inventory")
    public void save(@RequestBody CreateInventoryRequestDTO createInventoryRequestDTO) {
        inventoryService.save(createInventoryRequestDTO);
    }

    @GetMapping("/inventory")
    public List<InventoryResponseDTO> getAllInventory() {
        return inventoryService.getAllInventory();
    }

    @GetMapping("/inventory/{id}")
    public InventoryResponseDTO getInventoryById(@PathVariable Integer id) {
        return inventoryService.getInventoryById(id);
    }

    @DeleteMapping("/inventory/{id}")
    public void deleteInventoryById(@PathVariable Integer id) {
        inventoryService.deleteInventoryById(id);
    }
}
