const uploadInput = document.getElementById("uploadImage");
const previewImage = document.getElementById("productImage");

uploadInput.addEventListener("change", function () {
  const file = uploadInput.files[0];
  if (file) {
    previewImage.src = URL.createObjectURL(file);
    previewImage.style.display = "block";
  }
});

function analyzeProduct() {
  const result = document.getElementById("result");

  if (previewImage.style.display === "none") {
    result.innerHTML = "<p>Silakan unggah gambar produk terlebih dahulu.</p>";
    return;
  }

  result.innerHTML = `
    <h3>Hasil Analisis AI</h3>
    <p><strong>Target Market:</strong> Usia 18–35 tahun, aktif di media sosial.</p>
    <p><strong>Platform Rekomendasi:</strong> Instagram, TikTok, Facebook Ads.</p>
    <p><strong>Strategi:</strong> Konten visual menarik + iklan berbayar.</p>
    <p><strong>Kesimpulan:</strong> Produk memiliki potensi tinggi untuk dipasarkan secara digital.</p>
  `;
}
