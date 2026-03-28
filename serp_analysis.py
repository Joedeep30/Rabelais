import requests
import json
import os

API_KEY = "f19dde51c3df9385617a5d613e7773b9ef9f4572b6841ae767a23b62376038dc"
endpoint = "https://serpapi.com/search"

queries = [
    "ophtalmologue lyon",
    "retinologue lyon",
    "centre ophtalmologique lyon",
    "dmla lyon",
    "urgence ophtalmo lyon"
]

report_path = r"C:\Users\jeffo\.gemini\antigravity\brain\c800707c-520d-42b7-9307-0383dd04682d\serp_report.md"

with open(report_path, "w", encoding="utf-8") as f:
    f.write("# SERP & Competitor Analysis (Lyon)\n\n")
    
    for q in queries:
        f.write(f"## Keyword: `{q}`\n\n")
        params = {
            "engine": "google",
            "q": q,
            "location": "Lyon, Auvergne-Rhone-Alpes, France",
            "hl": "fr",
            "gl": "fr",
            "api_key": API_KEY,
            "num": 10
        }
        
        try:
            response = requests.get(endpoint, params=params)
            data = response.json()
            
            f.write("### 📍 Local Pack (Google Maps)\n")
            local_results = data.get("local_results", [])
            if isinstance(local_results, list):
                for i, place in enumerate(local_results[:3], 1):
                    title = place.get('title', 'Unknown')
                    f.write(f"{i}. **{title}**\n")
            elif isinstance(local_results, dict):
                places = local_results.get("places", [])
                for i, place in enumerate(places[:3], 1):
                    title = place.get('title', 'Unknown')
                    f.write(f"{i}. **{title}**\n")
            else:
                f.write("*No local pack found.*\n")
            
            f.write("\n### 🌐 Top Organic Competitors\n")
            organic = data.get("organic_results", [])
            if isinstance(organic, list):
                for i, res in enumerate(organic[:7], 1):
                    f.write(f"{i}. [{res.get('title')}]({res.get('link')})\n")
            else:
                f.write("*No organic results found.*\n")
                
            f.write("\n---\n\n")
            
        except Exception as e:
            f.write(f"Error fetching data: {e}\n\n")

print("Full structured report written to artifact.")
