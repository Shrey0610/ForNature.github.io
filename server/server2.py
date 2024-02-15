from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input, decode_predictions
import io
import openai

app = Flask(__name__)
model = ResNet50()
openai.api_key = 'YOUR_API_KEY'

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

@app.route('/upload', methods=['POST'])
def predict():
    try:
        # Get the uploaded file from the request
        imagefile = request.files['imagefile']

        # Create a file-like object from the uploaded file data
        image_data = io.BytesIO(imagefile.read())

        # Read the image data and preprocess it
        image = load_img(image_data, target_size=(224, 224))
        image = img_to_array(image)
        image = preprocess_input(image)
        image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))

        # Perform prediction using the model
        prediction = model.predict(image)
        label = decode_predictions(prediction)[0][0][1]

        # Use the prediction as input for the chatbot
        chat_input = f"Image prediction: {label}. What would you like to do next?"

        # Use OpenAI to generate a response
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": chat_input}],
        )

        # Extract the generated response from the OpenAI completion
        bot_response = response.choices[0].message.content.strip()

        # Return the response to the client
        return jsonify({'prediction': label, 'chat_output': bot_response})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=9006, debug=True)
