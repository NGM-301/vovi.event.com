package com.ngm301.vovi.reviewEvent.attendEvent.service;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.ngm301.vovi.reviewEvent.entity.TB_REVIEW_EVENT_2023;
import com.ngm301.vovi.reviewEvent.entity.Tb_memberEntity;
import com.ngm301.vovi.reviewEvent.entity.dto.MemberDto;
import com.ngm301.vovi.reviewEvent.entity.dto.ReviewDto;
import com.ngm301.vovi.reviewEvent.repo.ReviewEventRepository;
import com.ngm301.vovi.reviewEvent.repo.ReviewMemberRepository;

@Service
public class AttendEventService {
	
	private final ReviewMemberRepository reviewMemberRepository;
	private final ReviewEventRepository reviewEventRepository;
	private final ModelMapper modelMapper;
	
	public AttendEventService(ReviewMemberRepository reviewMemberRepository,
			ReviewEventRepository reviewEventRepository, ModelMapper modelMapper) {
		this.reviewMemberRepository = reviewMemberRepository;
		this.reviewEventRepository = reviewEventRepository;
		this.modelMapper = modelMapper;
	}

	public void save(MemberDto memberDto, ReviewDto reviewDto) {
		Tb_memberEntity tb_memberEntity = modelMapper.map(memberDto, Tb_memberEntity.class);
		tb_memberEntity.setGroupNum(1);
		tb_memberEntity.setUserLang("ko");
		tb_memberEntity.setDeleteYN('N');
		tb_memberEntity.setCreatedDate(LocalDateTime.now());
		tb_memberEntity.setUpdateDate(LocalDateTime.now());
		tb_memberEntity.setExpiredDate(LocalDateTime.now());
		this.reviewMemberRepository.save(tb_memberEntity);
		
		TB_REVIEW_EVENT_2023 event_2023 = modelMapper.map(reviewDto, TB_REVIEW_EVENT_2023.class);
		event_2023.setUserId(tb_memberEntity.getUserId());
		event_2023.setCreatedDatetime(LocalDateTime.now());
		event_2023.setUpdateDatetime(LocalDateTime.now());
		event_2023.setExpiredDatetime(LocalDateTime.now());
		event_2023.setDeleteYn('N');
		this.reviewEventRepository.save(event_2023);
	}
}
