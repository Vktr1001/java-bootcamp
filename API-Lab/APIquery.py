import requests

response = requests.get("https://jsonplaceholder.typicode.com/users/9")
print(response.json())