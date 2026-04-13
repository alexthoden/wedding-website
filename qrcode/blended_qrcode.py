import qrcode
from PIL import Image

# --- Generate QR code matrix ---
data = "http://thodenwoodwardwedding.com"

qr = qrcode.QRCode(
    version=4,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)

matrix = qr.get_matrix()  # 2D list of booleans

# --- Load texture image ---
texture = Image.open("background.jpg").convert("RGBA")

# --- Create output canvas ---
module_size = 20
qr_size = len(matrix) * module_size
output = Image.new("RGBA", (qr_size, qr_size), (255, 255, 255, 0))

# --- Paint modules using texture ---
for y, row in enumerate(matrix):
    for x, val in enumerate(row):
        if val:  # True = dark module
            # Crop a patch from the texture
            tx = (x * module_size) % texture.width
            ty = (y * module_size) % texture.height
            patch = texture.crop((tx, ty, tx + module_size, ty + module_size))
            output.paste(patch, (x * module_size, y * module_size))

output.save("qr_textured.png")