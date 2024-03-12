from flask import Flask

def create_app():
    app = Flask(__name__)

    from .track_map import track_map
    app.register_blueprint(track_map.bp)

    return app