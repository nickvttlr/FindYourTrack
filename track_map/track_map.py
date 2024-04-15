from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

bp = Blueprint('track_map', __name__, url_prefix='/')

@bp.route("/")
def track_map():
    try:
        return render_template('track_map/track_map.html')
    except TemplateNotFound:
        abort(404)