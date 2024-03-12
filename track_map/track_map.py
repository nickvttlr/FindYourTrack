from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

bp=Blueprint('track_map', __name__, url_prefix='/', template_folder='templates')

@bp.route("/")
def track_map():
    try:
        return render_template('templates/track_map.html')
    except TemplateNotFound:
        abort(404)