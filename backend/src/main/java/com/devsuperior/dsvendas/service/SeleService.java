package com.devsuperior.dsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SeleDto;
import com.devsuperior.dsvendas.dto.SeleSucessDto;
import com.devsuperior.dsvendas.dto.SeleSumDto;
import com.devsuperior.dsvendas.entities.Sele;
import com.devsuperior.dsvendas.repositories.SeleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SeleService {
	
	@Autowired
	private SeleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SeleDto> findAll(Pageable pageable){
		sellerRepository.findAll();
		Page<Sele> result = repository.findAll(pageable);
		return result.map(x -> new SeleDto(x));
		
	}
	@Transactional(readOnly = true)
	public List<SeleSumDto> amountGroupedBySeller() {
		return repository.amountGroupedBySeller();
		
	}
	
	@Transactional(readOnly = true)
	public List<SeleSucessDto> sucessGroupedBySeller() {
		return repository.sucessGroupedBySeller();
		
	}
	
}
