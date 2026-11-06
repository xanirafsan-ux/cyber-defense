# Network Analysis Case Study

**Scope:** Authorized personal lab traffic only

## Objective

Use Wireshark to identify DNS resolution, TCP connection setup, and encrypted web traffic without inspecting private content.

## Method

1. Start a capture on my own lab interface.
2. Visit a permitted test website.
3. Stop the capture and save a sanitized file.
4. Apply filters such as `dns`, `tcp`, and `tls`.
5. Record source, destination, protocol, and timing.
6. Remove private or sensitive captures before sharing.

## Questions answered

- Which DNS query was made?
- Which IP address answered?
- Did the TCP handshake complete?
- Was the web connection encrypted with TLS?
- Were there retransmissions or unusual connection failures?

## Findings template

- DNS request:
- DNS response:
- TCP handshake:
- TLS observation:
- Notable timing or retransmission:
- Security interpretation:
- Limitations:

## Safety note

Never upload credentials, session cookies, customer traffic, private emails, or traffic from an employer or another person. This case study is a method and reporting template until I add my own sanitized lab evidence.
