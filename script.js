const password = document.getElementById('password'); //Membuat variabel password-- 
const background = document.getElementById('background'); //Membuat variabel background--

//sumber: https://youtu.be/8YoTHyUyZJs?si=UJ4PITEoapBdntHC--
password.addEventListener('input',(e) => { //Mengadakan perubahan pada elemen password--
	const input = e.target.value; //Membuat variabel input--
	const length = input.length; //Membuat variabel length--
	const blurValue = 20 - length * 2 //Membuat gambar blur berkurang saat ada banyak huruf--
	background.style.filter = `blur(${blurValue}px)`; //Membuat background blur--
})

Swal.fire({
	title:"Jesslyn Ng", //Nama siswa pada pop up--
	text:"Si hoc negotium peractum est, adhuc superstes ero (Jika tugas ini selesai, saya masih hidup) - Sir serem banget mirip tung tung tung sahur", //Quotes dan roasting pada pop up--
	imageUrl:"Jess.jpg", //Menyisipkan gambar foto siswa pada pop up--
	imageWidth: 400, //Mengatur lebar gambar pada pop up--
	ImageHeight: 200, //Mengatur tinggi gambar pada pop up--
	confirmButtonText:"Tutup", //Tombol tutup pada pop up--
	showCloseButton: true, //Tombol x pada kanan atas pop up--
})