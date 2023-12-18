/**
 * @Class Name : vovi/event/js/confirmWinner.js
 * @Description : confirmWinner js
 * @Modification : Information
 * 
 * 수정일				수정자			수정내용
 * -------------------------------------------------------
 * 2023-12-18		sgjang		최초 생성
 * 
 * author: sgjang
 * since 2023-12-18 MON
 */

/*  변수  */

/* 함수 */

function fn_get(url, memberData, detail=null){
	$.ajax({
		url: contextPath + url,
		contentType: "application/json",
		method: "POST",
		data: JSON.stringify(memberData),
		success: function(response)
		{
			if(detail) {
	
			} else {
				console.log(response);
			} 
		},
		error: function(xhr)
		{
			
		}
	});
}