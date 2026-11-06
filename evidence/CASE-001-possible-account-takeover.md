# CASE-001 — Possible Account Takeover

**Environment:** Synthetic training dataset

**Initial severity:** High attention pending validation

**Status:** Open; escalated for L2 review in the scenario

## Summary

Five failed logins occurred within a short time window. The activity came from multiple locations and a new device. A successful login then occurred, followed by a high-value transaction attempt.

## Initial evidence

- Repeated authentication failures
- Multiple source locations
- New device fingerprint
- Successful login after failures
- High-value transaction attempt

## Triage decision

This pattern is consistent with possible account takeover, but the evidence is not sufficient to prove compromise. The analyst should validate user context, device history, IP reputation, authentication logs, and transaction logs.

## Response plan

1. Preserve relevant logs and timestamps.
2. Escalate to L2 Security and the Fraud team within the defined SLA.
3. Use only an authorized account-protection playbook.
4. Coordinate with the relevant application or identity team.
5. Record owner, actions, decisions, and closure criteria.

## Analyst learning

A good first-level analyst should avoid jumping directly from an alert to a conclusion. The job is to validate, scope, document, and escalate safely.
