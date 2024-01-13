from flask import Flask, render_template, request
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ejecutar_script', methods=['POST'])
def ejecutar_script():
    numero = request.form['numero']

    # Guarda el número en un archivo
    with open('entrada_numero.txt', 'w') as file:
        file.write(numero)

    # Ejecuta el script de Python
    resultado = subprocess.run(['python', 'arbol_familiar_costarricense.py'], capture_output=True, text=True)

    # Lee la salida del script
    salida_script = resultado.stdout

    return render_template('index.html', salida=salida_script)

if __name__ == '__main__':
    app.run(debug=True)