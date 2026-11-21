
document.getElementById("formKonsultasi").addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let telepon = document.getElementById("telepon").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || telepon === "" || pesan === "") {
        alert("Semua kolom wajib diisi!");
        return;
    }

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        alert("Masukkan alamat email yang benar!");
        return;
    }

    let polaTelepon = /^[0-9]{10,15}$/;

    if (!polaTelepon.test(telepon)) {
        alert("Nomor telepon harus terdiri dari 10-15 angka!");
        return;
    }

    alert("Formulir konsultasi berhasil diperiksa. Terima kasih!");

    document.getElementById("formKonsultasi").reset();

});

<section id="kontak">
    <h2>Kontak Kami</h2>

    <p>
        Jika Anda ingin mengetahui informasi lebih lanjut
        mengenai penyakit rabies, silakan hubungi pengelola
        website melalui informasi berikut.
    </p>

    <h3>Informasi Pengelola</h3>

    <p><strong>Nama Website:</strong> Rabies Care</p>

    <p><strong>Alamat:</strong> Karngdowo, Klaten, Jawa Tengah</p>

    <p><strong>Email:</strong>
        <a href="rainun1212@gmail.com">rainun1212@gmail.com
        </a>
    </p>

    <p><strong>Telepon:</strong> 085741529255</p>

    <p>
        <strong>Jam Pelayanan:</strong>
        Senin - Jumat, 08.00 - 16.00 WIB
    </p>

</section>
