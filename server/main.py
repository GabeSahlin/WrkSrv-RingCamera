from fastapi import FastAPI
from routes import events, users

app = FastAPI(title="WrkSvr RingDoorbell Server")

app.include_router(events.router)
app.include_router(users.router)

@app.get("/")
def root():
    return {"message": "Backend is running. Welcome to the WrkSvr RingDoorbell Server!"}