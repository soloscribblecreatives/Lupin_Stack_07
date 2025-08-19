function runAnimation() {
  window.requestAnimationFrame(function () {

	// Force only numeric input in the textbox
	document.getElementById("dd").addEventListener("input", function (d) {
	this.value = this.value.replace(/\D/g, '');
	});
	
	document.getElementById("mm").addEventListener("input", function (m) {
	this.value = this.value.replace(/\D/g, '');
	});
	
	document.getElementById("yy").addEventListener("input", function (y) {
	this.value = this.value.replace(/\D/g, '');
	});
	
	document.getElementById("submit").addEventListener("click", function() {
		//alert("its less buddy");
	let d = document.getElementById("dd").value.trim(),
		m = document.getElementById("mm").value.trim(),
		y = document.getElementById("yy").value.trim(),
		t = document.getElementById("dataAlert");
		
	if (t.textContent = "", isNaN(d)) {
		t.textContent = "Entered value is not a number. Please try again!";
		return
	}
	if (t.textContent = "", isNaN(m)) {
		t.textContent = "Entered value is not a number. Please try again!";
		return
	}
	if (t.textContent = "", isNaN(y)) {
		t.textContent = "Entered value is not a number. Please try again!";
		return
	}
	
	if (d.length < 2) {
		t.textContent = "Please enter 2 digits for Day value";
		return
	}
	
	if (m.length < 2) {
		t.textContent = "Please enter 2 digits for Month value";
		return
	}
	
	if (y.length < 2) {
		t.textContent = "Please enter 2 digits for Year value";
		return
	}
	
	let dd = parseInt(d, 10);

	if (dd > 31) {
    t.textContent = "Day value cannot be greater than 31";
    return;
	}
	
	if (dd < 01) {
    t.textContent = "Day value cannot be lower than 01";
    return;
	}
	
	let mm = parseInt(m, 10);

	if (mm > 12) {
    t.textContent = "Month value cannot be greater than 12";
    return;
	}
	
	if (mm < 01) {
    t.textContent = "Month value cannot be lower than 01";
    return;
	}
	
	let yy = parseInt(y, 10);

	if (yy > 25) {
    t.textContent = "Year value cannot be greater than current year 2025";
    return;
	}
	
	if (yy < 01) {
    t.textContent = "Year value cannot be lower than 01";
    return;
	}
	
	if ((d.length == 2) && (m.length == 2) && (y.length == 2) && (dd < 32) && (dd > 0) && (mm < 13) && (mm > 0) && (yy < 26) && (yy > 0)) {
		document.getElementById("submit").style.display = "none";
		return
	}
	
	});

  });
}