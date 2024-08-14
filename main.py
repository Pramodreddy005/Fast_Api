from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up templates directory
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_form(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/calculate")
async def calculate_output(request: Request, input1: float = Form(...), input2: float = Form(...),input4: float = Form(...),input5: float = Form(...), input6: float = Form(...), input3: float = Form(...)):
    output = input1 + input2 + input3 + input4 + input5 + input6
    return templates.TemplateResponse("index.html", {"request": request, "output": output})
