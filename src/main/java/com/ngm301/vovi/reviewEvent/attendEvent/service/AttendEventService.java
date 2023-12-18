package com.ngm301.vovi.reviewEvent.attendEvent.service;

import org.springframework.stereotype.Service;

import com.ngm301.vovi.reviewEvent.entity.Tb_memberEntity;
import com.ngm301.vovi.reviewEvent.entity.dto.MemberDto;
import com.ngm301.vovi.reviewEvent.repo.ReviewEventRepository;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class AttendEventService {
	
	private final ReviewEventRepository reviewEventRepository;

	public AttendEventService(ReviewEventRepository reviewEventRepository) {
		this.reviewEventRepository = reviewEventRepository;
	}

	public void save(MemberDto.SavingDto savingDto) {
		Tb_memberEntity tb_memberEntity = new Tb_memberEntity();
		tb_memberEntity.setUserNo("1");
		tb_memberEntity.setGroupNo(1);
		tb_memberEntity.setUserNm(savingDto.getUserNm());
		tb_memberEntity.setUserNm(savingDto.getUserTelNo());
		System.out.println(tb_memberEntity);
		reviewEventRepository.save(tb_memberEntity);
	}

}
