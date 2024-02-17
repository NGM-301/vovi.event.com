package com.ngm301.vovi;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;

import com.ngm301.vovi.reviewEvent.entity.Tb_memberEntity;
import com.ngm301.vovi.reviewEvent.entity.dto.MemberDto;

class MemberTest {
/*
	//@Test
	void test() {
		// MemberDto.SavingDto(userNm=홍길동, userTelNum=010-0000-0000,
		// userEmlAddr=test@test.com, postNum=10000, userAddr=테스트시 테스트동, detailAddr=101동
		// 020호)

		// ModelMapper 인스턴스 생성
		ModelMapper modelMapper = new ModelMapper();

		// MemberDto.SavingDto 인스턴스 생성 및 정보 설정
		MemberDto.SavingDto savingDto = MemberDto.SavingDto.builder()
				.userNm("홍길동")
				.userTelNum("010-0000-0000")
				.userEmlAddr("test@test.com")
				.postNum(10000)
				.userAddr("테스트시 테스트동")
				.detailAddr("101동 020호")
				.build();

		// SavingDto를 Tb_memberEntity로 매핑
		Tb_memberEntity memberEntity = modelMapper.map(savingDto, Tb_memberEntity.class);

		// 매핑된 엔티티 사용
		System.out.println("User Name: " + memberEntity.getUserNm());
		System.out.println("User Tel Num: " + memberEntity.getUserTelNum());
		System.out.println("User Email Addr: " + memberEntity.getUserEmlAddr());
		System.out.println("Post Num: " + memberEntity.getPostNum());
		System.out.println("User Addr: " + memberEntity.getUserAddr());
		System.out.println("Detail Addr: " + memberEntity.getDetailAddr());

	}
*/
}
