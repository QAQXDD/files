#!/bin/sh
# 草原 (macOS / Linux): serve this folder and open the browser. Ctrl+C to stop.
cd "$(dirname "$0")"
( sleep 1; (command -v open >/dev/null && open http://localhost:8648/) || xdg-open http://localhost:8648/ ) &
python3 -m http.server 8648 || npx --yes serve -l 8648 .
