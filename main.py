import uvicorn as uv
from app.app import app

if __name__ == "__main__":
    app = app
    uv.run("main:app", host="0.0.0.0", port=8000, reload=True)
