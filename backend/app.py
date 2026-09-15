from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #allows requests from the React server

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/dev')
def dev():
    return 'Dev Page'

@app.route('/actor')
def actor():
    return 'Actor Page'

@app.route('/contact')
def actor():
    return 'Contact Page'

if __name__ == "__main__":
    app.run(debug=True, port=5000)