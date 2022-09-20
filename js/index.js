function tinhtoan() {
    var kgca = document.getElementById("kgcakho").value;
    var giaca = document.getElementById("giacakho").value;

    if (kgca == "" || giaca == "") {
        alert("không được để trống");
    }
    else if(kgca<=0 || giaca<=0){
        alert("Thông tin nhập vào không được nhỏ hơn hoặc bằng 0 !");
    }
    else {
        var tonggia = 0;
        tonggia = kgca * giaca;
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-success">'+"Tổng số tiền là: "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tonggia)+'</div>';
    }
}

function reset() {
    document.getElementById("kgcakho").value = "";
    document.getElementById("giacakho").value = "";
    document.getElementById("vungchua").style.display="none";
}

function tinhtoancatuoi() {
    var catuoi = document.getElementById("kgcatuoi").value;

    if (catuoi == ""){
        alert("không được để trống");
    }else if(catuoi<=0){
        alert("Thông tin nhập vào không được nhỏ hơn hoặc bằng 0 !");
    } else {
        var tongkgkho = 0;
        tongkgkho = catuoi*0.218;
        document.getElementById("vungchua-catuoi").innerHTML = '<div class="alert alert-success">'+catuoi+" kg cà tươi được "+tongkgkho+" kg cà khô."+'</div>'
    }
}

function resetcatuoi() {
    document.getElementById("kgcatuoi").value = "";
    document.getElementById("vungchua-catuoi").style.display="none";
}