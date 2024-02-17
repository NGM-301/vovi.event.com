package com.ngm301.vovi.reviewEvent.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

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
	@Column(name = "USER_ID", nullable = false, length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;

	@Column(name = "GROUP_NUM", nullable = false)
	private Integer groupNum;

	@Column(name = "USER_NM", length = 100)
	private String userNm;

	@Column(name = "USER_TEL_NUM", length = 13)
	private String userTelNum;

	@Column(name = "USER_EML_ADDR", length = 1024)
	private String userEmlAddr;

	@Column(name = "POST_NUM", length = 10)
	private Integer postNum;

	@Column(name = "USER_ADDR", length = 1024)
	private String userAddr;

	@Column(name = "DETAIL_ADDR", length = 1024)
	private String detailAddr;

	@Column(name = "USER_LANG", length = 20)
	private String userLang;

	@Column(name = "CREATED_DATETIME", nullable = false)
	private LocalDateTime createdDate;

	@Column(name = "UPDATE_DATETIME")
	private LocalDateTime updateDate;

	@Column(name = "EXPIRED_DATETIME")
	private LocalDateTime expiredDate;

	@Column(name = "DELETE_YN", length = 1, nullable = false)
	private char deleteYN;

	//@Column(name = "USER_TELNO_INDEX", unique = true)
	//private String userTelNoIndex;

}
