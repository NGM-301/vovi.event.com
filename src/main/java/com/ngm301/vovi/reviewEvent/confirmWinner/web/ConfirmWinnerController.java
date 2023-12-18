package com.ngm301.vovi.reviewEvent.confirmWinner.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ConfirmWinnerController {

	@RequestMapping (value = "/review-event/confirm-winner")
	public String confirmWinnerPage() {
		return "vovi/reviewEvent/confirmWinner";
	}
}
