from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)

# Load the trained hybrid model
model = pickle.load(open('Hybrid_classifier.pkl','rb'))

# Load training data from a CSV file using pandas
#training_data = pd.read_csv("training_data.csv")
@app.route('/')
def home():
    return "hello"


@app.route('/predict', methods=['POST'])
def predict():


        # Extract input features from the request data
        Recency = request.form.get('Recency')
        Frequency = request.form.get('Frequency')
        Monetary = request.form.get('Monetary')
        Time = request.form.get('Time')

        # Create a DataFrame with the input data
        input_data = np.array([[float(Recency),float(Frequency),float(Monetary),float(Time)]])
        result = model.predict(input_data)
        # Make predictions using the hybrid classifier
        #prediction = hybrid_classifier.predict(input_data)
        return jsonify({'Donate':str(result)})
        
if __name__ == '__main__':
    app.run(debug=True)
