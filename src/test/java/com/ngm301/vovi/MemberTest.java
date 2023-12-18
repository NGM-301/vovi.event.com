package com.ngm301.vovi;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ngm301.vovi.reviewEvent.attendEvent.service.AttendEventService;
import com.ngm301.vovi.reviewEvent.repo.ReviewEventRepository;
@ExtendWith(MockitoExtension.class)
class MemberTest {
	private AttendEventService eventService;
	@Mock
	private ReviewEventRepository reviewEventRepository;

	@Test
	void test() {
		eventService = new AttendEventService(reviewEventRepository);
		//eventService.save();
	}

}
