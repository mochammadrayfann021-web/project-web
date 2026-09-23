document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formPendaftaran");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Ambil data dari form
            const nama = document.getElementById("nama_lengkap").value;
            const nisn = document.getElementById("nisn").value;
            const kelas = document.getElementById("kelas").value;
            const tempatLahir = document.getElementById("tempat_lahir").value;
            const tglLahir = document.getElementById("tgl_lahir").value;
            const jk = document.querySelector('input[name="jk"]:checked')?.value || "-";
            const whatsapp = document.getElementById("whatsapp").value;
            const email = document.getElementById("email").value;
            const alamat = document.getElementById("alamat").value;
            const bidang = document.getElementById("pilihan_bidang").value;
            const alasan = document.getElementById("alasan").value;
            const pengalaman = document.getElementById("pengalaman").value || "-";

            // Masukkan Nomor WhatsApp Admin IPM (Ganti dengan nomor WhatsApp aktif, sertakan kode negara 62)
            const nomorAdmin = "6281234567890"; 

            // Format Pesan WhatsApp
            const pesanWA = `*FORMULIR PENDAFTARAN ANGGOTA BARU PR IPM SMK ICC*%0A%0A` +
                `*Data Diri:*%0A` +
                `• Nama Lengkap: ${nama}%0A` +
                `• NISN/NIK: ${nisn}%0A` +
                `• Kelas & Jurusan: ${kelas}%0A` +
                `• TTL: ${tempatLahir}, ${tglLahir}%0A` +
                `• Jenis Kelamin: ${jk}%0A%0A` +
                `*Kontak:*%0A` +
                `• WhatsApp: ${whatsapp}%0A` +
                `• Email: ${email}%0A` +
                `• Alamat: ${alamat}%0A%0A` +
                `*Pilihan Bidang & Motivasi:*%0A` +
                `• Pilihan Bidang: ${bidang}%0A` +
                `• Alasan: ${alasan}%0A` +
                `• Pengalaman: ${pengalaman}`;

            // Notifikasi sebelum dikirim
            alert("Terima kasih sudah mendaftar! Anda akan diarahkan ke WhatsApp Panitia untuk verifikasi data.");

            // Membuka WhatsApp secara otomatis
            window.open(`https://wa.me/${nomorAdmin}?text=${pesanWA}`, "_blank");
        });
    }
});