function tambah() {
    let frm = document.getElementById("calc")
    let bill1 = parseFloat(frm.bill1.value), bill2 = parseFloat(frm.bill2.value)
    if (isNaN(bill1) || isNaN(bill2)) {
        alert("Maaf yang Anda Input bukan Angka!")
    }else{
        frm.result.value = bill1 + bill2
    }
}

function kurang() {
    let frm = document.getElementById("calc")
    let bill1 = parseFloat(frm.bill1.value), bill2 = parseFloat(frm.bill2.value);
    if (isNaN(bill1) || isNaN(bill2)) {
        alert("Maaf yang Anda Input bukan Angka!")
    }else{
        frm.result.value = bill1 - bill2
    }
}

function kali() {
    let frm = document.getElementById("calc")
    let bill1 = parseFloat(frm.bill1.value), bill2 = parseFloat(frm.bill2.value);
    if (isNaN(bill1) || isNaN(bill2)) {
        alert("Maaf yang Anda Input bukan Angka!")
    }else{
        frm.result.value = bill1 * bill2
    }
}

function bagi() {
    let frm = document.getElementById("calc")
    let bill1 = parseFloat(frm.bill1.value), bill2 = parseFloat(frm.bill2.value);
    if (isNaN(bill1) || isNaN(bill2)) {
        alert("Maaf yang Anda Input bukan Angka!")
    }else{
        frm.result.value = bill1 / bill2
    }
}

function pangkat() {
    let frm = document.getElementById("calc")
    let bill1 = parseFloat(frm.bill1.value), bill2 = parseFloat(frm.bill2.value);
    if (isNaN(bill1) || isNaN(bill2)) {
        alert("Maaf yang Anda Input bukan Angka!")
    }else{   
        frm.result.value = Math.pow(bill1,  bill2)
    }
}