# Cyber Defense Operations Portfolio

A GitHub-ready, browser-based portfolio tailored to the bKash **Engineer, Cyber Defense Operations** role.

## Review this repository in five minutes

Start with `index.html` to view the browser lab. Then inspect `tools/analyze_auth_logs.py` and run it against `data/auth-events.json`. Read `evidence/CASE-001-possible-account-takeover.md` to see the incident-report format, then review the phishing and network-analysis case studies. Finally, open `evidence/job-requirement-map.md` to see how each artifact maps to the role.

## What it demonstrates

This repository demonstrates alert triage, synthetic authentication-log analysis, severity reasoning, phishing first response, incident documentation, shift-handover communication, detection-rule thinking, and learning-level familiarity with SIEM, SOAR, EDR, PAM, DAM, firewalls, and WAFs.

## Run locally

Because this is a static site, you can open `index.html` directly. For the best browser behavior, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

To run the reproducible analyzer and tests:

```bash
python3 tools/analyze_auth_logs.py data/auth-events.json
python3 -m unittest discover -s tests -v
```

## Publish with GitHub Pages

1. Create a repository named `cyber-defense-portfolio`.
2. Upload the repository contents, including `.github`, `data`, `detection-rules`, `evidence`, `tests`, `tools`, `index.html`, and `app.js`.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main`, and choose `/root`.
5. Replace `[Your Name]`, email, LinkedIn, GitHub username, and resume link.
6. Add your real lab evidence before sharing with a recruiter.

## Evidence inventory

- `tools/analyze_auth_logs.py`: standard-library Python analyzer.
- `tests/test_analyze_auth_logs.py`: reproducibility test.
- `data/auth-events.json`: synthetic authentication events.
- `detection-rules/authentication-rules.yml`: test detection logic and false-positive notes.
- `evidence/CASE-001-possible-account-takeover.md`: incident report.
- `evidence/phishing-triage-case-study.md`: safe phishing workflow.
- `evidence/network-analysis-case-study.md`: authorized Wireshark method and findings template.
- `evidence/job-requirement-map.md`: role-to-evidence mapping.
- `ETHICS.md`: authorized-use and data-sanitization rules.

## Honesty boundary

This project demonstrates **self-directed lab practice using synthetic or authorized data**. It does not claim production SOC access, employment, or experience with bKash systems. Replace placeholders and add only evidence you actually created: your own screenshots, notes, code, certificates, lab links, and reports.

## Suggested next evidence

Add a sanitized Wireshark screenshot from your own lab, a Windows/Linux authentication-log report, a Python parser enhancement, and links to any legitimate training platforms or certifications you have actually completed.
