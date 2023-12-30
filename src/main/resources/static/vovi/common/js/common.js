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

/* ---- confirm 알림 함수 ---- */
/*  
사용예시)
modalConfirm("추천키워드를 추가하시겠습니까?").then((result) => {
	if (result) {
		// true일 경우 실행할 함수
	}else{
		// false일 경우 실행할 함수
	}
});
*/
function modalConfirm(confrimMessage) {
	const CONFIRM_MODAL_DIV = document.createElement("div");
	const CONFIRM_MODAL_DIALOG_DIV = document.createElement("div");
	const CONFIRM_MODAL_CONTENT_DIV = document.createElement("div");
	const CONFIRM_MODAL_HEADER_DIV = document.createElement("div");
	const CONFIRM_MODAL_BODY_DIV = document.createElement("div");
	const CONFIRM_MODAL_FOOTER_DIV = document.createElement("div");
	const CONFIRM_MODAL_TITLE_H5 = document.createElement("h5");
	const CONFIRM_MODAL_ACTION_BTN = document.createElement("button");
	const CONFIRM_MODAL_CLOSE_BTN_1 = document.createElement("button");
	const CONFIRM_MODAL_CANCLE_BTN = document.createElement("button");

	setModalWrap(CONFIRM_MODAL_DIV,"confirmModal", "confirmModalTitle");
	setModalContent(CONFIRM_MODAL_DIALOG_DIV, CONFIRM_MODAL_CONTENT_DIV)
	setModalHeader(CONFIRM_MODAL_HEADER_DIV, CONFIRM_MODAL_TITLE_H5, "confirmModalTitle", CONFIRM_MODAL_CLOSE_BTN_1)
	
	CONFIRM_MODAL_HEADER_DIV.appendChild(CONFIRM_MODAL_TITLE_H5);
	CONFIRM_MODAL_HEADER_DIV.appendChild(CONFIRM_MODAL_CLOSE_BTN_1);

	setModalBody(CONFIRM_MODAL_BODY_DIV, confrimMessage)
	
	let buttonOptrions = [
		{	
			element : CONFIRM_MODAL_ACTION_BTN,
			className : "btn btn-outline-primary",
			textContent:"확인",
			dismiss : false
		},{
			element : CONFIRM_MODAL_CANCLE_BTN,
			className : "btn btn-outline-secondary",
			textContent: "취소",
			dismiss : true
		}
	]
	
	setModalFooter(CONFIRM_MODAL_FOOTER_DIV,buttonOptrions)
	
	CONFIRM_MODAL_FOOTER_DIV.appendChild(CONFIRM_MODAL_ACTION_BTN);
	CONFIRM_MODAL_FOOTER_DIV.appendChild(CONFIRM_MODAL_CANCLE_BTN);
	
	CONFIRM_MODAL_CONTENT_DIV.appendChild(CONFIRM_MODAL_HEADER_DIV);
	CONFIRM_MODAL_CONTENT_DIV.appendChild(CONFIRM_MODAL_BODY_DIV);
	CONFIRM_MODAL_CONTENT_DIV.appendChild(CONFIRM_MODAL_FOOTER_DIV);
	
	CONFIRM_MODAL_DIALOG_DIV.appendChild(CONFIRM_MODAL_CONTENT_DIV);
	
	CONFIRM_MODAL_DIV.appendChild(CONFIRM_MODAL_DIALOG_DIV);
	
	document.body.appendChild(CONFIRM_MODAL_DIV);
	feather.replace();
	
	$(CONFIRM_MODAL_DIV).modal("show");

	function confirmPromise()
	{
		return new Promise((resolve) => {
			CONFIRM_MODAL_CLOSE_BTN_1.addEventListener("click", function() {
				CONFIRM_MODAL_DIV.remove();
				resolve(false);
			});
			CONFIRM_MODAL_CANCLE_BTN.addEventListener("click", function() {
				CONFIRM_MODAL_DIV.remove();
				resolve(false);
			});
			CONFIRM_MODAL_ACTION_BTN.addEventListener("click", function() {
				$(CONFIRM_MODAL_DIV).modal("hide");
				CONFIRM_MODAL_DIV.remove();
				resolve(true);
			});
			CONFIRM_MODAL_DIV.addEventListener("keyup", function(e) {
				if (e.keyCode === 13) {
					$(CONFIRM_MODAL_DIV).modal("hide");
					CONFIRM_MODAL_DIV.remove();
					resolve(true);
				}
			});
		});
	}
	return confirmPromise();
}

/* ---- alert 알림 함수 ---- */
/*
사용예시)
modalAlert("메시지");
*/
/**
 *	alert 동적 생성 함수
 *	@param alertMessage 알림글 메시지
**/
function modalAlert(alertMessage)
{
	const ALERT_MODAL_DIV = document.createElement("div");
	const ALERT_MODAL_DIALOG_DIV = document.createElement("div");
	const ALERT_MODAL_CONTENT_DIV = document.createElement("div");
	const ALERT_MODAL_HEADER_DIV = document.createElement("div");
	const ALERT_MODAL_BODY_DIV = document.createElement("div");
	const ALERT_MODAL_FOOTER_DIV = document.createElement("div");
	const ALERT_MODAL_TITLE_H5 = document.createElement("h5");
	const ALERT_MODAL_CLOSE_BTN = document.createElement("button");
	const ALERT_MODAL_BTN = document.createElement("button");
	
	setModalWrap(ALERT_MODAL_DIV, "alertModal", "alertModalTitle");
	setModalContent(ALERT_MODAL_DIALOG_DIV, ALERT_MODAL_CONTENT_DIV)
	setModalHeader(ALERT_MODAL_HEADER_DIV, ALERT_MODAL_TITLE_H5, "alertModalTitle", ALERT_MODAL_CLOSE_BTN)

	ALERT_MODAL_HEADER_DIV.appendChild(ALERT_MODAL_TITLE_H5);
	ALERT_MODAL_HEADER_DIV.appendChild(ALERT_MODAL_CLOSE_BTN);

	setModalBody(ALERT_MODAL_BODY_DIV, alertMessage)

	let buttonOptrions = [
		{
			element: ALERT_MODAL_BTN,
			className: "btn btn-outline-primary customAlert",
			textContent: "확인",
			dismiss: false
		}
	]

	setModalFooter(ALERT_MODAL_FOOTER_DIV, buttonOptrions)

	ALERT_MODAL_FOOTER_DIV.appendChild(ALERT_MODAL_BTN);

	ALERT_MODAL_CONTENT_DIV.appendChild(ALERT_MODAL_HEADER_DIV);
	ALERT_MODAL_CONTENT_DIV.appendChild(ALERT_MODAL_BODY_DIV);
	ALERT_MODAL_CONTENT_DIV.appendChild(ALERT_MODAL_FOOTER_DIV);

	ALERT_MODAL_DIALOG_DIV.appendChild(ALERT_MODAL_CONTENT_DIV);

	ALERT_MODAL_DIV.appendChild(ALERT_MODAL_DIALOG_DIV);

	document.body.appendChild(ALERT_MODAL_DIV);
	feather.replace();

	$(ALERT_MODAL_DIV).modal("show");
	
	function alertPromise()
	{
		return new Promise(() => {
			ALERT_MODAL_CLOSE_BTN.addEventListener("click", function() {
				ALERT_MODAL_DIV.remove();
			});
			ALERT_MODAL_BTN.addEventListener("click", function() {
				$(ALERT_MODAL_DIV).modal("hide");
				ALERT_MODAL_DIV.remove();
			});
			ALERT_MODAL_DIV.addEventListener("keyup", function(e) {
				if(e.keyCode === 13){
					$(ALERT_MODAL_DIV).modal("hide");
					ALERT_MODAL_DIV.remove();
				}
			});
		});
	}

	return alertPromise();
}
/* ---- alert 알림 함수 끝 ---- */

/* modal 동적 생성 */
function setModalWrap(wrapDiv, modalId, modalTitleId)
{
	wrapDiv.className = "modal fade";
	wrapDiv.id = modalId;
	wrapDiv.tabIndex = "-1";
	wrapDiv.role = "dialog";
	wrapDiv.setAttribute("aria-labelledby", modalTitleId);
	wrapDiv.setAttribute("aria-hidden", "true");
	wrapDiv.setAttribute("data-bs-backdrop", "static");
}

function setModalContent(dialogDiv, contentDiv){
	dialogDiv.className = "modal-dialog modal-dialog-centered";
	dialogDiv.role = "document";
	contentDiv.className = "modal-content";
}

function setModalHeader(headerDiv, titleH5, titleH5Id, button){
	headerDiv.className = "modal-header";
	
	titleH5.className = "modal-title";
	titleH5.id = titleH5Id;
	titleH5.innerHTML = `<i class="text-warning" data-feather="bell"></i>VOVIC&E 알림`;
	
	button.className = "btn-close";
	button.type = "button";
	button.setAttribute("data-bs-dismiss", "modal");
	button.setAttribute("aria-label", "Close");
}

function setModalBody(bodyDiv, message){
	bodyDiv.className = "modal-body";
	bodyDiv.innerHTML = message;
}

function setModalFooter(footerDiv, buttonOptrions){
	footerDiv.className = "modal-footer";
	for(let i=0; i < buttonOptrions.length; i++){
		buttonOptrions[i].element.className = buttonOptrions[i].className;
		buttonOptrions[i].element.type = "button";
		buttonOptrions[i].element.textContent = buttonOptrions[i].textContent;
		if(buttonOptrions[i].dismiss){
			buttonOptrions[i].element.setAttribute("data-bs-dismiss", "modal");
		}
	}
}
/* modal 동적 생성 끝 */


window.addEventListener("load", addActiveLnbArea);
window.addEventListener("resize", addActiveLnbArea);
feather.replace();