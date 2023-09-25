from flask import Flask

app = flask(__name__)

@app.route("/")
def Homepage():
    return "Página inicial"


if __name__ == "__main__":
    app.run(debug = True)