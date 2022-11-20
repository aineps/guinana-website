from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/order')
def order():
    return render_template('order.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/nutrition')
def nutrition():
    return render_template('nutrition.html')