import os
from rembg import remove
from PIL import Image

# --- Pengaturan Folder ---
# Ganti dengan path folder tempat kamu simpan gambar asli
folder_input = 'with_bg'

# Ganti dengan path folder untuk menyimpan hasil gambar tanpa background
folder_output = 'rem_bg'
# -------------------------


print("Start deleting background image")

# Loop untuk setiap file di dalam folder input
for nama_file in os.listdir(folder_input):
    # Cek dulu filenya gambar atau bukan (biar file aneh ga ikut diproses)
    if nama_file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        
        # Bikin path lengkap untuk file input dan output
        path_input = os.path.join(folder_input, nama_file)
        # Ganti ekstensi file jadi .png biar transparan
        nama_file_output = os.path.splitext(nama_file)[0] + ".png"
        path_output = os.path.join(folder_output, nama_file_output)
        
        try:
            # Buka gambar inputnya
            gambar_input = Image.open(path_input)
            
            # Proses hapus background-nya! Ini intinyaa
            gambar_output = remove(gambar_input)
            
            # Simpan gambar yang udah bersih ke folder output
            gambar_output.save(path_output)
            
            print(f"-> Success! Background '{nama_file}' deleted.")
            
        except Exception as e:
            print(f"error in file '{nama_file}': {e}")

print("\nDone!")