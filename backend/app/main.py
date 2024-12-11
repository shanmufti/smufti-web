from fastapi import FastAPI

# Create the FastAPI instance
app = FastAPI()


@app.get("/")
def home():
    return {"message": "Welcome to my backend!"}
