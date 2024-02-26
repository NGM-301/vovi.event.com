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
@ToString
@DynamicInsert
@Table(name = "TB_REVIEW_EVENT_2023")
public class TB_REVIEW_EVENT_2023 {

	@Id
	@Column(name = "REVIEW_ID", nullable = false, length = 10)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long reviewId;

	@Column(name = "USER_ID", nullable = false, length = 10)
	private Long userId;

	//@Column(name = "REVIEW_PW", nullable = false, length = 100)
	//private String reviewPw;

	@Column(name = "REVIEW", nullable = false)
	private String review;

	@Column(name = "CREATED_DATETIME", nullable = false)
	private LocalDateTime createdDatetime;

	@Column(name = "EXPIRED_DATETIME")
	private LocalDateTime expiredDatetime;

	@Column(name = "UPDATE_DATETIME")
	private LocalDateTime updateDatetime;

	@Column(name = "DELETE_YN", columnDefinition = "bpchar(1) default 'N'")
	private char deleteYn;
}
