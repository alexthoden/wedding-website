import qrcode
from PIL import Image

# Basic QR code generation
data = "http://thodenwoodwardwedding.com"   # Replace with your content

qr = qrcode.QRCode(
    version=1,                 # Controls size; 1 is smallest
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)

qr.add_data(data)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("qr_basic.png")