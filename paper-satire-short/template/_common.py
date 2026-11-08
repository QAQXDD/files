"""Shared bits for the capture scripts (render / playtest / cover)."""
import os, json
ROOT = os.path.dirname(os.path.abspath(__file__))
P = json.load(open(os.path.join(ROOT, 'project.json'), encoding='utf8'))
HTML = os.path.join(ROOT, 'out', P['slug'] + '.html')
URL = 'file://' + HTML
# headless Chromium WebGL without a GPU: SwiftShader. (On a real GPU machine these flags are harmless.)
CHROME_ARGS = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox']
def timeline():
    return json.load(open(os.path.join(ROOT, 'timeline.json')))
