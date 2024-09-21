from flask import Flask, render_template, request, jsonify, redirect, url_for, session, flash
import numpy as np
import tensorflow_hub as hub
from keras.models import load_model
from keras.utils import custom_object_scope
import os
from PIL import Image  # Importing PIL for image handling

app = Flask(__name__)

# Configure upload folder and file size limit
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Limit file size to 16MB

# Register the custom layer using custom_object_scope
with custom_object_scope({'KerasLayer': hub.KerasLayer}):
    model = load_model('skin_disease_model_Riju.keras')

# Create the uploads folder if it doesn't exist
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Function to load and preprocess the image
def load_image(image_path, target_size=(224, 224)):
    img = Image.open(image_path)  # Open the image file
    img = img.resize(target_size)  # Resize to target size (224, 224)
    img = np.array(img)  # Convert image to numpy array
    return img

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/loginpage')
def loginpage():
    return render_template('loginpage.html')

@app.route('/aboutus')
def aboutus():
    return render_template('aboutus.html')

@app.route('/appoinment')
def appoinment():
    return render_template('appoinment.html')

# This route is for rendering the gallery page
@app.route('/galary', methods=['GET'])
def galary():
    return render_template('galary.html')

# This route handles the image scan and prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if the POST request has the file part
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'}), 400

        file = request.files['file']

        # If no file is selected
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400

        # Save the file to the uploads folder
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

        # Load and preprocess the image using the newly defined load_image function
        img = load_image(file_path, target_size=(224, 224))
        input_data = img.reshape(1, 224, 224, 3)  # Reshape for the model
        input_data_scaled = input_data / 255.0  # Scaling

        # Perform prediction
        prediction = model.predict(input_data_scaled)
        predicted_label = np.argmax(prediction, axis=1)[0]

        # Return the result as JSON
        return jsonify({'predicted_label': int(predicted_label)})

    except Exception as e:
        # Return error message if something goes wrong
        return jsonify({'error': str(e)}), 400

if __name__ == 'main':
    app.run(debug=True)