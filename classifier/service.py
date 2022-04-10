from flask import Flask, request
from train import load_model, convert_text, titles


model = load_model()
app = Flask(__name__)

@app.route('/get-classification', methods=['POST'])
def get_classification():
    request_json = request.get_json()

    text = convert_text(request_json['text'])
    
    result = model.predict([text])[0]

    classifications = [
        title for status, title in zip(result, titles) if status == 1
    ]

    print(text)
    print(classifications)

    return {'classifications': classifications}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')