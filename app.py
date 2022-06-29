from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def home():
    return render_template('guinana.html')

@app.route('/test')
def test():
    return render_template('test.html')