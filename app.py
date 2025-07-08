from flask import Flask, render_template, url_for
import matplotlib
matplotlib.use('Agg')  # Important pour éviter les erreurs GUI
import matplotlib.pyplot as plt
import numpy as np
import os 


app = Flask(__name__)


def save_graph_as(name):

    image_path = os.path.join(app.root_path, 'static', 'images', name)
    plt.savefig(image_path, bbox_inches='tight')
    plt.close()


@app.route('/')
def main():

    plt.figure(figsize=(6, 4))
    x = [1, 2, 3, 4, 5]
    y = [10, 5, 7, 12, 8]
    plt.plot(x, y, marker='o')
    plt.title("Exemple de graphique")
    plt.xlabel("X")
    plt.ylabel("Y")

    save_graph_as("graph1.png")


    x = np.linspace(0, 10, 100)
    y = np.sin(x)
    plt.figure(figsize=(6, 4))
    plt.plot(x, y, linestyle='--', color='blue', linewidth=2, marker='o', markersize=4)
    plt.title("Courbe sinusoïdale")
    plt.xlabel("Temps (s)")
    plt.ylabel("Amplitude")
    plt.grid(True)

    save_graph_as("graph2.png")


    categories = ['A', 'B', 'C', 'D']
    values = [23, 45, 12, 36]
    colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db']
    plt.figure(figsize=(6, 4))
    plt.bar(categories, values, color=colors)
    plt.title("Valeurs par catégorie")
    plt.xlabel("Catégorie")
    plt.ylabel("Valeur")

    save_graph_as("graph3.png")

    NOM = "Dashboard Swall-E"

    return render_template('index.html', title=NOM)
