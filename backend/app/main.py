from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app import cars, upload  # import routers here

# ✅ Create app first
app = FastAPI(title="911 - Diecast Cars API")

# ✅ Add CORS (so React can call backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Mount static folder (for image hosting)
app.mount("/static", StaticFiles(directory="app/static_images"), name="static")

# ✅ Include routes AFTER creating app
app.include_router(cars.router)
app.include_router(upload.router)

@app.get("/")
def root():
    return {"message": "🚗 911 Diecast Cars API is running!"}
