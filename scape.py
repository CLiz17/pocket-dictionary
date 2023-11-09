import requests
from bs4 import BeautifulSoup
import re

website_url = 'http://lizchaitanya.xyz'

response = requests.get(website_url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    anchor_tags = soup.find_all('a')

    for anchor in anchor_tags:
        href = anchor.get('href')
        if href:
            print(href)

else:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find API endpoints
    js_code = soup.find_all('script', {'type': 'text/javascript'})

    for script in js_code:
        api_endpoints = re.findall(r'https?://\S+', script.text)
        if api_endpoints:
            print(f'API Endpoints found in script:')
            for endpoint in api_endpoints:
                print(endpoint)

else:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")