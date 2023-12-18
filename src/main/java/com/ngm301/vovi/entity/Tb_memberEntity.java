package com.ngm301.vovi.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.Index;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "TB_MEMBER")
@ToString
@DynamicInsert
public class Tb_memberEntity {
	@Id
	@Column(name = "USER_NO", nullable = false, length = 10)
	private String userNo;

	@Column(name = "GROUP_NO", nullable = false)
	private Integer groupNo;

	@Column(name = "USER_NM", length = 100)
	private String userNm;

	@Column(name = "USER_ADDR", length = 220)
	private String userAddr;

	@Column(name = "RRNO", length = 14)
	private String rrNo;

	@Column(name = "USER_TELNO", length = 13)
	private String userTelNo;

	@Column(name = "USER_EML_ADDR", length = 320)
	private String userEmlAddr;

	@Column(name = "USER_LANG", length = 20)
	private String userLang;

	@Column(name = "CREATED_DATETIME", nullable = false)
	private LocalDateTime createdDate=LocalDateTime.now();

	@Column(name = "UPDATE_DATETIME")
	private LocalDateTime updateDate=LocalDateTime.now();

	@Column(name = "EXPIRED_DATETIME")
	private LocalDateTime expiredDate=LocalDateTime.now();

	@Column(name = "DELETE_YN", length = 1, nullable = false)
	private char deleteYN = 'Y';

	@Index(name = "TB_MEMBER_IDX1")
	@Column(name = "USER_TELNO_INDEX", unique = true)
	private String userTelNoIndex;

}
