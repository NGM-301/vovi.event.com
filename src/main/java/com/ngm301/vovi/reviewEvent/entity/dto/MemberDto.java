package com.ngm301.vovi.reviewEvent.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public class MemberDto {

	@Getter
	@Setter
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	@ToString
	public static class SavingDto {
		private String userNm;
		private String userTelNo;
		private String userEmlAddr;
		private String userAddr;
		//private String rrNo;
	}

}
