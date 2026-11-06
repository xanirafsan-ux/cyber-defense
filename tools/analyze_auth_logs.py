#!/usr/bin/env python3
"""Analyze synthetic authentication events for junior SOC practice.

Usage: python3 tools/analyze_auth_logs.py data/auth-events.json
"""
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path


def analyze(path: str) -> dict:
    events = json.loads(Path(path).read_text())
    failed = [e for e in events if e["outcome"].lower() == "failed"]
    successful = [e for e in events if e["outcome"].lower() == "success"]
    failures_by_user = Counter(e["user"] for e in failed)
    failed_ips = Counter(e["ip"] for e in failed)
    suspicious = []
    for e in events:
        reasons = []
        if e["risk"].lower() == "high":
            reasons.append("high-risk source signal")
        if e["device"].lower() == "new":
            reasons.append("new device")
        if e["country"].lower() not in {"dhaka", "bangladesh"}:
            reasons.append("unusual location context")
        if reasons:
            suspicious.append({"event": e, "reasons": reasons})
    return {
        "total_events": len(events),
        "failed_events": len(failed),
        "successful_events": len(successful),
        "failures_by_user": dict(failures_by_user),
        "failed_ips": dict(failed_ips),
        "suspicious_event_count": len(suspicious),
        "suspicious_events": suspicious,
    }


def main() -> int:
    if len(sys.argv) != 2:
        print("Usage: python3 tools/analyze_auth_logs.py data/auth-events.json")
        return 2
    result = analyze(sys.argv[1])
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
