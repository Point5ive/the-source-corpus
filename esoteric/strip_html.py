import sys, re
from html.parser import HTMLParser

class HTMLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.skip = False
    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style', 'nav', 'footer', 'header'):
            self.skip = True
    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'nav', 'footer', 'header'):
            self.skip = False
        if tag in ('p', 'div', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'tr'):
            self.text.append('\n')
    def handle_data(self, data):
        if not self.skip:
            self.text.append(data)
    def get_text(self):
        text = ''.join(self.text)
        # Clean up whitespace
        text = re.sub(r'\n\s*\n\s*\n+', '\n\n', text)
        text = re.sub(r'[ \t]+', ' ', text)
        return text.strip()

with open(sys.argv[1], 'r', errors='ignore') as f:
    html = f.read()
s = HTMLStripper()
s.feed(html)
result = s.get_text()
print(result)
