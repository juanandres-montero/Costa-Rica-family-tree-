import subprocess
resultado = subprocess.run(['python', 'arbol_familiar_costarricense.py'], capture_output=True, text=True)
salida_script = resultado.stdout
print(salida_script)