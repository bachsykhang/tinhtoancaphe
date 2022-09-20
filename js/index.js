function tinhtoan() {
    var kgca = document.getElementById("kgcakho").value;
    var giaca = document.getElementById("giacakho").value;

    if (kgca == "" || giaca == "") {
        alert("không được để trống");
    }else {
        var tonggia = 0;
        tonggia = kgca * giaca;
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-success">'+"Tổng số tiền là: "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tonggia)+'</div>';
    }
}

function reset() {
    document.getElementById("vungchua").style.display="none";
}