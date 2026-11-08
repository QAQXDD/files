Real recordings go here as 48 kHz WAV (use `python3 fetch_commons.py "File:<name>" <short_name>`; it refuses anything
that is not CC0 / Public Domain and logs the source in CREDITS.md). audio.py loads them with `load_sfx('<short_name>')`
and falls back to numpy synthesis when a file is missing, so the project always builds.
