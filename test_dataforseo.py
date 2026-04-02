"""Quick test: single DataForSEO Maps call to verify API works."""
import requests, json

AUTH = "Ymx1ZW1hcmtzYUBnbWFpbC5jb206NWNhNTVkZGQ4ZTQxYjY1NQ=="
url = "https://api.dataforseo.com/v3/serp/google/maps/live/advanced"
headers = {"Authorization": f"Basic {AUTH}", "Content-Type": "application/json"}

payload = [{
    "keyword": "ophtalmologue lyon",
    "location_coordinate": "45.756,4.837,14z",
    "language_code": "fr",
    "device": "desktop",
    "os": "windows",
}]

print("Sending request...")
r = requests.post(url, headers=headers, json=payload, timeout=30)
print(f"Status: {r.status_code}")
data = r.json()

if data.get("status_code") == 20000:
    tasks = data.get("tasks", [])
    if tasks and tasks[0].get("result"):
        items = tasks[0]["result"][0].get("items", [])
        print(f"\nTop 5 results:")
        for item in items[:10]:
            rank = item.get("rank_group")
            title = item.get("title")
            print(f"  #{rank} — {title}")
    else:
        print("No results in task")
        print(json.dumps(data, indent=2)[:500])
else:
    print(f"API Error: {data.get('status_message')}")
    print(json.dumps(data, indent=2)[:500])
