from fastapi import FastAPI


app = FastAPI(
    title="EKT AI Assistant",
    description="AI assistant for EKT product catalog",
    version="0.1.0",
)


@app.get("/")
async def root():
    return {
        "message": "EKT AI Assistant API",
        "status": "running"
    }


@app.get("/health")
async def health():
    return {
        "status": "ok",
        "service": "EKT AI Assistant"
    }