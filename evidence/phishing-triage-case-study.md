# Phishing Triage Case Study

**Scope:** Synthetic training message; no real malicious attachment or live payload

## Scenario

A user reports an email claiming to be an urgent account-security notice. The message asks the user to verify credentials through a link and includes a lookalike sender domain.

## Indicators reviewed

- Sender and reply-to mismatch
- Lookalike domain spelling
- Urgent request for credentials
- Link destination not matching the visible text
- Potentially unexpected attachment

## First response

1. Tell the user not to click, reply, or open the attachment.
2. Preserve the original message and headers.
3. Report through the approved security channel.
4. Search for other recipients if the relevant tooling is available.
5. Quarantine or block through an authorized process.
6. Escalate confirmed malicious activity and document timestamps.

## User guidance

> Please do not interact with the message. Keep it available for analysis, and report it through the approved channel. If you clicked the link or entered credentials, tell the security team immediately.

## Limitations

This case study demonstrates a triage method. It does not claim access to a production mail gateway, SIEM, SOAR, or EDR platform.
