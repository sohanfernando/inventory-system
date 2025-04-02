package com.example.carsparepartsproject.service;

import com.example.carsparepartsproject.controller.request.CreateInventoryRequestDTO;
import com.example.carsparepartsproject.controller.response.InventoryResponseDTO;

import java.util.List;

public interface InventoryService {
    void save(CreateInventoryRequestDTO createInventoryRequestDTO);
    List<InventoryResponseDTO> getAllInventory();
    InventoryResponseDTO getInventoryById(Integer id);
    void deleteInventoryById(Integer id);
}
