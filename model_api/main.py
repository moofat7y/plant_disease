from fastapi import FastAPI,File,UploadFile,Request;
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras import models
import uvicorn
import numpy as np
import tensorflow as tf
from utils.utilFun import read_file_as_image
app = FastAPI()

MODEL = models.load_model(r'D:\Projects\Full Stack\Plant_Disease\model_api\detectionModel.h5')
CLASS_NAME = ['Apple___Apple_scab',
 'Apple___healthy',
 'Corn_(maize)___Northern_Leaf_Blight',
 'Corn_(maize)___healthy',
 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
 'Grape___healthy',
 'Potato___Early_blight',
 'Potato___healthy',
 'Strawberry___Leaf_scorch',
 'Strawberry___healthy',
 'Tomato___Leaf_Mold',
 'Tomato___healthy']

origins = ["http://localhost:5173","http://localhost:5174","https://plant-disease-moofat7y.vercel.app"]
app.add_middleware(CORSMiddleware,allow_origins=origins,allow_credentials=True,allow_methods=['*'],allow_headers=['*'])


@app.post('/predict')
async def predict(file : UploadFile = File(...)):
  
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(img_batch)
    print(predictions)
    predicted_class = CLASS_NAME[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])

    return {
        'class' : predicted_class,
        'confidence' : round(float(confidence)*100,2)
    }
if __name__ == "__main__":
    uvicorn.run(app,host='localhost',port=8000)