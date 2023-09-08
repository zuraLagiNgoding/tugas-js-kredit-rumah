document.getElementById("proses").addEventListener("click", function () {
    var typeRumah = document.getElementById("type-rumah").value;
    var lamaKredit = parseInt(document.getElementById("lama-kredit").value);
    var hargaAlamanda = 120000000;
    var hargaMawar = 130000000;
    var uangMuka = 0.2;

    var hargaRumah = typeRumah === "alamanda" ? hargaAlamanda : hargaMawar;

    var uangMukaAmount = uangMuka * hargaRumah;

    var sisa = hargaRumah - uangMukaAmount;

    var angsuran = sisa / lamaKredit;

    document.getElementById("output-type-rumah").textContent = typeRumah;
    document.getElementById("harga-rumah").textContent = hargaRumah;
    document.getElementById("uang-muka").textContent = uangMukaAmount;
    document.getElementById("sisa").textContent = sisa;
    document.getElementById("output-lama-kredit").textContent = lamaKredit;
    document.getElementById("output-angsuran").textContent = angsuran.toFixed(2);

    var dataTable = document.getElementById("data-table");
    dataTable.innerHTML = "";

    for (var i = 1; i <= lamaKredit; i++) {
        var newRow = document.createElement("tr");
        var newMonthCell = document.createElement("td");
        var newAngsuranCell = document.createElement("td");
        var newSisaCell = document.createElement("td");

        newMonthCell.textContent = i;
        newAngsuranCell.textContent = angsuran.toFixed(2);
        sisa -= angsuran;
        newSisaCell.textContent = sisa.toFixed(2);

        newRow.appendChild(newMonthCell);
        newRow.appendChild(newAngsuranCell);
        newRow.appendChild(newSisaCell);
        dataTable.appendChild(newRow);
    }
});