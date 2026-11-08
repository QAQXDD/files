#!/usr/bin/env python3
"""Fetch a REAL recording from Wikimedia Commons, but only if it is CC0 / Public Domain; convert to 48 kHz stereo WAV.

  python3 fetch_commons.py "File:Festival_concert_people_crowd.ogg" crowd
  python3 fetch_commons.py --search "door slam" 10        # list candidates with their licence

Writes sfx/<name>.wav and appends the source + licence to sfx/CREDITS.md (keep it with the project).
Find candidates: https://commons.wikimedia.org/w/index.php?search=<words>+filetype:audio  (Category:Sound effects, etc.)
"""
import sys, os, json, subprocess, urllib.request, urllib.parse
API = 'https://commons.wikimedia.org/w/api.php'
UA = {'User-Agent': 'paper-satire-short/1.0 (sound fetch for a short film; contact: none)'}
OK = ('cc0', 'public domain', 'pd', 'cc-zero')
here = os.path.dirname(os.path.abspath(__file__))

def api(**p):
    p.update(format='json')
    req = urllib.request.Request(API + '?' + urllib.parse.urlencode(p), headers=UA)
    return json.load(urllib.request.urlopen(req, timeout=30))

def info(title):
    r = api(action='query', titles=title, prop='imageinfo', iiprop='url|extmetadata|size|mime')
    pg = next(iter(r['query']['pages'].values()))
    if 'imageinfo' not in pg: raise SystemExit(f'not found: {title}')
    ii = pg['imageinfo'][0]; md = ii.get('extmetadata', {})
    lic = (md.get('LicenseShortName', {}).get('value') or md.get('License', {}).get('value') or '').strip()
    return ii['url'].split('?')[0], lic, md.get('Artist', {}).get('value', ''), ii.get('mime', '')

def is_free(lic):
    l = lic.lower(); return any(k in l for k in OK)

if __name__ == '__main__':
    a = sys.argv[1:]
    if not a: raise SystemExit(__doc__)
    if a[0] == '--search':
        n = int(a[2]) if len(a) > 2 else 10
        r = api(action='query', list='search', srsearch=a[1] + ' filetype:audio', srnamespace=6, srlimit=n)
        for h in r['query']['search']:
            try: _, lic, _, mime = info(h['title'])
            except SystemExit: continue
            print(('OK   ' if is_free(lic) else 'skip ') + f"{lic:28s} {h['title']}")
        sys.exit()
    title, name = a[0], a[1]
    url, lic, artist, mime = info(title)
    if not is_free(lic):
        raise SystemExit(f'REFUSED: {title} is "{lic}" (only CC0 / Public Domain). Pick another file or synthesise it in audio.py.')
    os.makedirs(os.path.join(here, 'sfx'), exist_ok=True)
    raw = os.path.join(here, 'sfx', name + '.src' + os.path.splitext(url)[1])
    req = urllib.request.Request(url, headers=UA)
    open(raw, 'wb').write(urllib.request.urlopen(req, timeout=60).read())
    wav = os.path.join(here, 'sfx', name + '.wav')
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', raw, '-ac', '2', '-ar', '48000', wav], check=True)
    os.remove(raw)
    with open(os.path.join(here, 'sfx', 'CREDITS.md'), 'a', encoding='utf8') as f:
        f.write(f'- {name}.wav ← {title} ({lic}) {url}\n')
    print('ok', wav, lic)
