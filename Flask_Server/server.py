from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	if request.method == 'GET':
		return render_template("index.html")
	else:
		user_name = request.form['userName']
		greeting = f"Hello, {user_name}!"
		return render_template("home.html", greeting=greeting)

if __name__ == "__main__":
	app.run()
