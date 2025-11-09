from fastapi import APIRouter, UploadFile, File
import shutil
import os

router = APIRouter(prefix="/upload", tags=["upload"])

UPLOAD_DIR = "app/static_images"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/")
async def upload_image(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"url": f"http://127.0.0.1:8000/static/{file.filename}"}
