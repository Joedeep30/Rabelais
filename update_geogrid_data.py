#!/usr/bin/env python3
"""
GeoGrid Tracker — DataForSEO Google Maps Live API
Generates a 7x7 spatial grid of real Google Maps rankings
for Centre Ophtalmologique Rabelais across Lyon.
"""
import os
import json
import time
import requests

# DataForSEO credentials
AUTH_TOKEN = "Ymx1ZW1hcmtzYUBnbWFpbC5jb206NWNhNTVkZGQ4ZTQxYjY1NQ=="

# Grid configuration
CENTER_LAT = 45.7560
CENTER_LNG = 4.8370
GRID_SIZE = 7
SPACING = 0.008  # ~800m between points

# Keywords to track
KEYWORDS = [
    "ophtalmologue lyon",
    "photobiomodulation lyon",
    "rétinologue lyon",
    "traitement dmla lyon",
    "injection intravitréenne lyon",
    "ophtalmologue lyon 6",
    "ophtalmologue brotteaux",
    "spécialiste rétine lyon",
    "oct macula lyon",
    "fond oeil lyon",
    "ophtalmologiste lyon",
    "rétinopathie diabétique lyon",
    "centre rétine lyon",
]

# Names to match for Rabelais clinic
CLINIC_NAMES = ["rabelais", "quaranta", "maddalena"]


def generate_grid_points():
    """Generate lat/lng coordinates for a 7x7 grid centered on the clinic."""
    points = []
    half = GRID_SIZE // 2
    for r in range(GRID_SIZE):
        for c in range(GRID_SIZE):
            lat = CENTER_LAT + (half - r) * SPACING
            lng = CENTER_LNG + (c - half) * SPACING
            points.append({"row": r, "col": c, "lat": round(lat, 7), "lng": round(lng, 7)})
    return points


def query_maps(keyword, lat, lng):
    """Query DataForSEO Google Organic Live endpoint to extract the Local Pack (SERP) ranking."""
    url = "https://api.dataforseo.com/v3/serp/google/organic/live/advanced"
    headers = {
        "Authorization": f"Basic {AUTH_TOKEN}",
        "Content-Type": "application/json",
    }
    payload = [
        {
            "keyword": keyword,
            "location_coordinate": f"{lat},{lng},14z",
            "language_code": "fr",
            "device": "desktop",
            "os": "windows",
            "depth": 30,
        }
    ]

    try:
        resp = requests.post(url, headers=headers, json=payload, timeout=30)
        data = resp.json()

        if data.get("status_code") != 20000:
            print(f"    API error: {data.get('status_message')}")
            return None

        tasks = data.get("tasks", [])
        if not tasks or not tasks[0].get("result"):
            return None

        items = tasks[0]["result"][0].get("items", [])
        for item in items:
            if item.get("type") == "local_pack":
                pack_items = item.get("items", [])
                for pi in pack_items:
                    title = (pi.get("title") or "").lower()
                    for name in CLINIC_NAMES:
                        if name in title:
                            return pi.get("rank_group")
                # If we see a local pack but we are not in it, we return None (not in SERP pack)
                return None
        
        # If no local pack at all was triggered
        return None

    except requests.exceptions.Timeout:
        print(f"    Timeout for [{lat},{lng}]")
        return None
    except Exception as e:
        print(f"    Error: {e}")
        return None


def query_organic(keyword):
    """Query DataForSEO Google Organic Live endpoint for a keyword."""
    url = "https://api.dataforseo.com/v3/serp/google/organic/live/advanced"
    headers = {
        "Authorization": f"Basic {AUTH_TOKEN}",
        "Content-Type": "application/json",
    }
    payload = [
        {
            "keyword": keyword,
            "location_name": "Lyon,Auvergne-Rhone-Alpes,France",
            "language_code": "fr",
            "device": "desktop",
            "os": "windows",
            "depth": 30,
        }
    ]

    try:
        resp = requests.post(url, headers=headers, json=payload, timeout=30)
        data = resp.json()

        if data.get("status_code") != 20000:
            return None, None

        tasks = data.get("tasks", [])
        if not tasks or not tasks[0].get("result"):
            return None, None

        items = tasks[0]["result"][0].get("items", [])
        organic_rank = None
        local_rank = None

        for item in items:
            item_type = item.get("type", "")

            # Check organic results
            if item_type == "organic" and organic_rank is None:
                url_str = (item.get("url") or "").lower()
                if "centrerabelaislyon.fr" in url_str:
                    organic_rank = item.get("rank_group")

            # Check local pack
            if item_type == "local_pack" and local_rank is None:
                pack_items = item.get("items", [])
                for pi in pack_items:
                    title = (pi.get("title") or "").lower()
                    for name in CLINIC_NAMES:
                        if name in title:
                            local_rank = pi.get("rank_group", 1)
                            break

        return organic_rank, local_rank

    except Exception as e:
        print(f"    Organic error: {e}")
        return None, None


def run_geogrid():
    """Run the full 7x7 geogrid scan for all keywords."""
    points = generate_grid_points()
    geogrid_results = []

    for kw in KEYWORDS:
        print(f"\n📍 Scanning grid for: {kw}")
        grid = [[None for _ in range(GRID_SIZE)] for _ in range(GRID_SIZE)]

        for pt in points:
            r, c = pt["row"], pt["col"]
            print(f"  [{r},{c}] ({pt['lat']},{pt['lng']})...", end="", flush=True)
            rank = query_maps(kw, pt["lat"], pt["lng"])
            grid[r][c] = rank
            symbol = str(rank) if rank else "—"
            print(f" {symbol}")
            time.sleep(0.3)

        geogrid_results.append({"keyword": kw, "grid": grid})

    return geogrid_results


def run_organic():
    """Run organic + local pack ranking checks for all keywords."""
    organic_results = []

    for kw in KEYWORDS:
        print(f"  🔎 Organic check: {kw}...", end="", flush=True)
        org, loc = query_organic(kw)
        organic_results.append({
            "keyword": kw,
            "organic_rank": org,
            "local_pack_rank": loc,
        })
        org_str = str(org) if org else "—"
        loc_str = str(loc) if loc else "—"
        print(f" Organic: {org_str}, Local Pack: {loc_str}")
        time.sleep(0.3)

    return organic_results


def main():
    print("=" * 60)
    print("DataForSEO GeoGrid + Organic Tracker")
    print("Centre Ophtalmologique Rabelais — Lyon")
    print("=" * 60)

    # Phase 1: GeoGrid (Maps)
    print("\n🗺️  PHASE 1: Google Maps GeoGrid Scan")
    geogrid = run_geogrid()

    # Phase 2: Organic Rankings
    print("\n🔍 PHASE 2: Google Organic + Local Pack Rankings")
    organic = run_organic()

    # Save results
    output_dir = os.path.join(os.getcwd(), "src", "lib")
    os.makedirs(output_dir, exist_ok=True)

    geogrid_path = os.path.join(output_dir, "geogrid_data.json")
    with open(geogrid_path, "w", encoding="utf-8") as f:
        json.dump(geogrid, f, ensure_ascii=False, indent=2)
    print(f"\n✅ GeoGrid data saved to {geogrid_path}")

    organic_path = os.path.join(output_dir, "organic_data.json")
    with open(organic_path, "w", encoding="utf-8") as f:
        json.dump(organic, f, ensure_ascii=False, indent=2)
    print(f"✅ Organic data saved to {organic_path}")

    # Print summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    for entry in organic:
        kw = entry["keyword"]
        org = entry["organic_rank"] or "Not ranked"
        loc = entry["local_pack_rank"] or "Not in pack"
        print(f"  {kw}: Organic #{org}, Local Pack #{loc}")


if __name__ == "__main__":
    main()
