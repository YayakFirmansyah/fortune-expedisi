/**
 * Fungsi untuk menghitung biaya ekspedisi berdasarkan jarak
 * @param {number} distanceKm - Jarak tempuh dalam Kilometer
 * @returns {object} - Rincian harga (bbm, jasa, total)
 */
export const hitungBiayaCarter = (distanceKm) => {
  const jarak = parseFloat(distanceKm);

  // Validasi jika input kosong atau bukan angka
  if (isNaN(jarak) || jarak <= 0) {
    return null;
  }

  // 1. Biaya BBM: 9 km = 1 Liter (Rp 10.000)
  const biayaBBM = (jarak / 9) * 10000;

  // 2. Biaya Jasa: Waktu Tempuh (Jarak / 50 km/jam) * Rp 50.000
  // Secara matematika ini sama dengan Jarak * 1000
  const biayaJasa = (jarak / 50) * 50000;

  // 3. Total Keseluruhan
  const totalBiaya = biayaBBM + biayaJasa;

  return {
    bbm: Math.round(biayaBBM),
    jasa: Math.round(biayaJasa),
    total: Math.round(totalBiaya),
  };
};

/**
 * Fungsi untuk mengubah angka menjadi format Rupiah (Rp)
 */
export const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};
