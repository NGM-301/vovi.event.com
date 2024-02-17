package com.ngm301.vovi.reviewEvent.attendEvent.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ngm301.vovi.reviewEvent.attendEvent.service.AttendEventService;
import com.ngm301.vovi.reviewEvent.entity.dto.RequestDto;

@RestController
@RequestMapping(value = "/review-event")
public class AttendEventRestController {

	@Autowired
	AttendEventService eventService;
	
	@PostMapping(value = "/attend-event")
	public void save(@RequestBody RequestDto requestDto) {
		eventService.save(requestDto.getMemberDto(), requestDto.getReviewDto());
	}
	
}
