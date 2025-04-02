package com.example.carsparepartsproject.service.impl;

import com.example.carsparepartsproject.model.Inventory;
import com.example.carsparepartsproject.repository.InventoryRepository;
import com.example.carsparepartsproject.controller.request.CreateInventoryRequestDTO;
import com.example.carsparepartsproject.controller.response.InventoryResponseDTO;
import com.example.carsparepartsproject.service.InventoryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class InventoryServiceImpl implements InventoryService {
    private InventoryRepository inventoryRepository;

    @Override
    public void save(CreateInventoryRequestDTO createInventoryRequestDTO) {
        Inventory inventory = new Inventory();

        inventory.setPartName(createInventoryRequestDTO.getPartName());
        inventory.setCategory(createInventoryRequestDTO.getCategory());
        inventory.setBrand(createInventoryRequestDTO.getBrand());
        inventory.setSupplier(createInventoryRequestDTO.getSupplier());
        inventory.setStockQuantity(createInventoryRequestDTO.getStockQuantity());
        inventory.setUnitPrice(createInventoryRequestDTO.getUnitPrice());
        inventory.setReorderLevel(createInventoryRequestDTO.getReorderLevel());
        inventory.setLastRestocked(LocalDate.now());

        inventoryRepository.save(inventory);
    }

    @Override
    public List<InventoryResponseDTO> getAllInventory() {
        List<Inventory> inventories = inventoryRepository.findAll();
        List<InventoryResponseDTO> createInventoryResponseDTOS = new ArrayList<>();

        inventories.forEach(inventory -> {
            InventoryResponseDTO createInventoryResponseDTO = new InventoryResponseDTO(
                    inventory.getId(),
                    inventory.getPartName(),
                    inventory.getCategory(),
                    inventory.getBrand(),
                    inventory.getSupplier(),
                    inventory.getStockQuantity(),
                    inventory.getUnitPrice(),
                    inventory.getReorderLevel(),
                    inventory.getLastRestocked()
            );
            createInventoryResponseDTOS.add(createInventoryResponseDTO);
        });

        return createInventoryResponseDTOS;
    }

    @Override
    public InventoryResponseDTO getInventoryById(Integer id) {
        Inventory inventory = inventoryRepository.findById(id).
                orElseThrow(() -> new RuntimeException("Inventory not found"));
        return new InventoryResponseDTO(
                inventory.getId(),
                inventory.getPartName(),
                inventory.getCategory(),
                inventory.getBrand(),
                inventory.getSupplier(),
                inventory.getStockQuantity(),
                inventory.getUnitPrice(),
                inventory.getReorderLevel(),
                inventory.getLastRestocked()
        );
    }

    @Override
    public void deleteInventoryById(Integer id) {
        inventoryRepository.deleteById(id);
    }
}
