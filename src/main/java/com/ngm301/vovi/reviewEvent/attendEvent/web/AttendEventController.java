package com.ngm301.vovi.reviewEvent.attendEvent.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AttendEventController {

	@RequestMapping(value = "/review-event/attend-event")
	public String joinEventPage() {
		return "vovi/reviewEvent/attendEvent";
	}

}
