$("#convert").click(function() {
  if($("#suhuAwal").val() != "") {
    suhuAwal = $("#suhuAwal").val();
    satuanSuhu = $("#satuanSuhu").val();

    if(satuanSuhu == "celcius") {
      $("#celcius").val(suhuAwal + " °C");
      $("#reamur").val(Math.round(((4/5) * suhuAwal) * 10) / 10 + " °R");
      $("#fahrenheit").val(Math.round(((9/5) * suhuAwal + 32) * 10) / 10 + " °F");
      $("#kelvin").val(Math.round((parseInt(suhuAwal) + 273) * 10) / 10 + " K");
    }

    if(satuanSuhu == "reamur") {
      $("#celcius").val(Math.round(((5/4) * suhuAwal) * 10) / 10 + " °C");
      $("#reamur").val(suhuAwal + " °R");
      $("#fahrenheit").val(Math.round(((9/4) * suhuAwal + 32) * 10) / 10 + " °F");
      $("#kelvin").val(Math.round(((5/4) * suhuAwal + 273) * 10) / 10 + " K");
    }

    if(satuanSuhu == "fahrenheit") {
      $("#celcius").val(Math.round(((5/9) * (suhuAwal - 32)) * 10) / 10 + " °C");
      $("#reamur").val(Math.round(((4/9) * (suhuAwal - 32)) * 10) / 10 + " °R");
      $("#fahrenheit").val(suhuAwal + " °F");
      $("#kelvin").val(Math.round(((5/9) * (suhuAwal - 32) + 273) * 10) / 10 + " K");
    }

    if(satuanSuhu == "kelvin") {
      $("#celcius").val(Math.round((parseInt(suhuAwal) - 273) * 10) / 10 + " °C");
      $("#reamur").val(Math.round(((4/5) * (suhuAwal - 273)) * 10) / 10 + " °R");
      $("#fahrenheit").val(Math.round(((9/5) * (suhuAwal - 273) + 32) * 10) / 10 + " °F");
      $("#kelvin").val(suhuAwal + " K");
    }
  } else {
    Swal.fire(
      'Pastikan Suhu Awal Terisi!',
      'Suhu Awal kosong, silahkan diisi terlebih dahulu!',
      'error'
    );
  }
});