from http.server import SimpleHTTPRequestHandler, HTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('ngrok-skip-browser-warning', 'true')
        super().end_headers()

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 8000), CustomHandler)
    print('Serving at http://0.0.0.0:8000')
    server.serve_forever() 