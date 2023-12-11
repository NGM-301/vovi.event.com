package com.ngm301.vovi;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ngm301.vovi.event.service.EventService;
import com.ngm301.vovi.event.service.Tb_memberRepository;
@ExtendWith(MockitoExtension.class)
class MemberTest {
	private EventService eventService;
	@Mock
	private Tb_memberRepository tb_memberRepository;

	@Test
	void test() {
		eventService = new EventService(tb_memberRepository);
		//eventService.save();
	}

}
