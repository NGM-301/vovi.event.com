package com.ngm301.vovi.reviewEvent.attendEvent.service;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ngm301.vovi.reviewEvent.entity.Tb_memberEntity;
import com.ngm301.vovi.reviewEvent.entity.dto.MemberDto;
import com.ngm301.vovi.reviewEvent.repo.ReviewEventRepository;

@Service
public class AttendEventService {
	
	private final ReviewEventRepository reviewEventRepository;
	private final ModelMapper modelMapper;
	
	public AttendEventService(ReviewEventRepository reviewEventRepository, ModelMapper modelMapper) {
		this.reviewEventRepository = reviewEventRepository;
		this.modelMapper = modelMapper;
	}

	public void save(MemberDto.SavingDto savingDto) {
		Tb_memberEntity tb_memberEntity = modelMapper.map(savingDto, Tb_memberEntity.class);
		tb_memberEntity.setGroupNum(1);
		tb_memberEntity.setUserLang("ko");
		tb_memberEntity.setDeleteYN('N');
		tb_memberEntity.setCreatedDate(LocalDateTime.now());
		tb_memberEntity.setUpdateDate(LocalDateTime.now());
		tb_memberEntity.setExpiredDate(LocalDateTime.now());
		this.reviewEventRepository.save(tb_memberEntity);
	}

}
