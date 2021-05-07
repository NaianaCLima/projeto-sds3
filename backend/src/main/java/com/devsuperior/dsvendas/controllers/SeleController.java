package com.devsuperior.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SeleDto;
import com.devsuperior.dsvendas.service.SeleService;

@RestController
@RequestMapping(value = "/seles")
public class SeleController {
	
	@Autowired
	private SeleService service;
	
	@GetMapping
	public ResponseEntity<Page<SeleDto>> findAll(Pageable pageable){
		Page<SeleDto> list = service.findAll(pageable);
		return ResponseEntity.ok(list);
	}

}
