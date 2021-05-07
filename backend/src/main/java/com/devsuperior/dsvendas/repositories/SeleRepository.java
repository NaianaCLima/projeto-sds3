package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.dto.SeleSucessDto;
import com.devsuperior.dsvendas.dto.SeleSumDto;
import com.devsuperior.dsvendas.entities.Sele;

public interface SeleRepository extends JpaRepository<Sele, Long> {
	
	@Query("SELECT new com.devsuperior.dsvendas.dto.SeleSumDto(obj.seller, SUM(obj.amount)) "
			+ "FROM Sele AS obj GROUP BY obj.seller")
	List<SeleSumDto> amountGroupedBySeller();
	
	@Query("SELECT new com.devsuperior.dsvendas.dto.SeleSucessDto(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM Sele AS obj GROUP BY obj.seller")
	List<SeleSucessDto> sucessGroupedBySeller();

}
