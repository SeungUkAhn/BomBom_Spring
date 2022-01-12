	
function findAddr(){
	new daum.Postcode({
        oncomplete: function(data) {
           
            document.getElementById("addr_general").value = data.address;
            document.getElementById("addr_detail").focus();
        }
    }).open({left: '640', top: '200', popupTitle: '봄봄 - 주소 찾기'});
}

//기본주소와 상세주소를 합쳐주는 함수
function addAddr(){
	
	console.log($('#addr_general').val());
	$('#user_addr').val(($('#addr_general').val() + ' ' + $('#addr_detail').val()));
}


function validate(){
	
	let reg_pw = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/; // 문자, 숫자 1개이상 포함, 8자리 이상
	let reg_name = /^[가-힣a-zA-Z]+$/; // 한글 + 영문만
	let reg_phone = /^[0-9]{8,13}$/;// 휴대폰 번호 숫자만
	
	if(!reg_pw.test($('#user_pwd').val())){
		$('.toast').empty().append('비밀번호는 8자리 이상, 문자와 숫자를 각각 1개 이상 포함해야 합니다').fadeIn(500).delay(3000).fadeOut(500);
		$('#user_pwd').focus();
		return false;
	}
	
	if($('#user_pwd').val() != $('#user_pwdcheck').val()){	//비밀번호 확인여부 검사
		$('.toast').empty().append('비밀번호를 확인해주시기 바랍니다').fadeIn(500).delay(3000).fadeOut(500);
		$('#user_pwcheck').focus();
		return false;
	}
	
	if(!reg_name.test($('#user_name').val())){
		$('.toast').empty().append('이름은 한글과 영문으로만 작성하실 수 있습니다').fadeIn(500).delay(3000).fadeOut(500);
		$('#user_name').focus();
		return false;
	}
	
	
	if(!reg_phone.test($('#user_phone').val())){
		$('.toast').empty().append('휴대폰 번호는 특수문자를 제외하고 숫자로만 작성해주세요').fadeIn(500).delay(3000).fadeOut(500);
		$('#user_phone').focus();
		return false;
	}
	
	
	return true;
}