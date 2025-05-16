const password = document.getElementById('password');
const background = document.getElementById('background');

//sumber: https://youtu.be/8YoTHyUyZJs?si=UJ4PITEoapBdntHC
password.addEventListener('input',(e) => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 20 - length * 2
	background.style.filter = `blur(${blurValue}px)`;
})

Swal.fire({
	title:"Jesslyn Ng",
	text:"Si hoc negotium peractum est, adhuc superstes ero (Jika tugas ini selesai, saya masih hidup) - Sir serem banget mirip tung tung tung sahur",
	imageUrl:"Jess.jpg",
	imageWidth: 400,
	ImageHeight: 200,
	confirmButtonText:"Tutup",
	showCloseButton: true,
})