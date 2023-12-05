package com.ngm301.vovi.event.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EventController {

	@RequestMapping(value = "/event")
	public String eventPage() {
		return "vovi/event/event";
	}
}
