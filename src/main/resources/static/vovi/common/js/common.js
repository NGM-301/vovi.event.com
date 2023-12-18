/**
 * @Class Name : vovi/common/js/common.js
 * @Description : common js
 * @Modification : Information
 * 
 * 수정일				수정자			수정내용
 * -------------------------------------------------------
 * 2023-12-06		sgjang		최초 생성
 * 
 * author: sgjang
 * since 2023-12-06 WED
 */


/* ajax Method */
const GET = "GET";
const DELETE = "DELETE";
const PUT = "PUT";
const POST = "POST";

/* class name */
const ACTIVE_CLASS = "active";

/*content-type*/
const APPLICATION_JSON = "application/json";

/**	
 *	Lnb 영역에 active 클래스 추가
**/
const addActiveLnbArea = () => {
	let url = window.location.pathname;
	const targetAnchors = document.body.querySelectorAll(`[href="${url}"].navLink`);
	const browserWidth = window.innerWidth;

	if($(".offcanvas").hasClass("show") && browserWidth > 992) {
		$(".offcanvasBtn").trigger("click");
	}
	
	targetAnchors.forEach(targetAnchor => {
		let parentNode = targetAnchor.parentNode;
		parentNode.classList.add(ACTIVE_CLASS);
	});

}

/**
 *	loading spinner 동적 생성
 **/
function createLoadingSpinner(cardBodyHight)
{
	
	let containerDiv = document.createElement("div");
	containerDiv.className = "d-flex justify-content-center align-items-center";
	if(cardBodyHight[0] > 100)
	{
		containerDiv.style.marginTop = `${cardBodyHight[0]/5}px`;
	}
	
	let spinnerDiv = document.createElement("div");
	spinnerDiv.className = "spinner-border";
	spinnerDiv.setAttribute('role', 'status');
	spinnerDiv.style.width = "4rem";
	spinnerDiv.style.height = "4rem";
	spinnerDiv.style.color = "#0061f2";

	containerDiv.appendChild(spinnerDiv);
	
	return containerDiv;
}

/**
 *	AJAX 통신 시작 시 spinner 생성
 *	@param $cardDivList
 **/
function setLoadingSpinner($cardDivList)
{
	$cardDivList.forEach(function(cardId) {
		let cardBodyHight = $(cardId.find(".card-body").outerHeight());
		$(cardId.find(".ajaxSpinner")).append(createLoadingSpinner(cardBodyHight));
	})
}

/**
 *	AJAX 통신 종료 시 spinner 삭제
 *	@param $cardDivList
 **/
function deleteLoadingSpinner($cardDivList)
{
	$cardDivList.forEach(function(cardId) {
		$(cardId.find(".ajaxSpinner")).remove();
		$(cardId.find(".content")).show();
	})
}

window.addEventListener("load", addActiveLnbArea);
window.addEventListener("resize", addActiveLnbArea);
feather.replace();