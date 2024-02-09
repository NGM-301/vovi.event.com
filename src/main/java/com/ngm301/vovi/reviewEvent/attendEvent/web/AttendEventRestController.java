package com.ngm301.vovi.reviewEvent.attendEvent.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ngm301.vovi.reviewEvent.attendEvent.service.AttendEventService;
import com.ngm301.vovi.reviewEvent.entity.dto.MemberDto;

@RestController
@RequestMapping(value = "/review-event")
public class AttendEventRestController {

	@Autowired
	AttendEventService eventService;
	
//	@PostMapping(value = "/member")
//	public ResponseEntity<MemberDto.SavingDto> save(@RequestBody MemberDto.SavingDto savingDto) {
//		System.out.println("들어옴");
//		System.out.println(savingDto);
//		eventService.save(savingDto);
//		return ResponseEntity.ok().body(savingDto);
//	}
	
	@PostMapping(value = "/attend-event")
	public ResponseEntity<MemberDto.SavingDto> save(@RequestBody MemberDto.SavingDto savingDto) {
		System.out.println("들어옴");
		System.out.println(savingDto);
		eventService.save(savingDto);
		return ResponseEntity.ok().body(savingDto);
	}
	
}
