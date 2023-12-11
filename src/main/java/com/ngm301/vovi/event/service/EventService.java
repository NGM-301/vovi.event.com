package com.ngm301.vovi.event.service;

import org.springframework.stereotype.Service;

import com.ngm301.vovi.event.entity.Tb_memberEntity;
import com.ngm301.vovi.event.entity.dto.MemberDto;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class EventService {
	
	private final Tb_memberRepository tb_memberRepository;

	public EventService(Tb_memberRepository tb_memberRepository) {
		this.tb_memberRepository = tb_memberRepository;
	}

	public void save(MemberDto.SavingDto savingDto) {
		Tb_memberEntity tb_memberEntity = new Tb_memberEntity();
		tb_memberEntity.setUserNo("1");
		tb_memberEntity.setGroupNo(1);
		tb_memberEntity.setUserNm(savingDto.getUserNm());
		tb_memberEntity.setUserNm(savingDto.getUserTelNo());
		System.out.println(tb_memberEntity);
		tb_memberRepository.save(tb_memberEntity);
	}

}
