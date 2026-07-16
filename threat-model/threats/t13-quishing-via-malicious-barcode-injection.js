(function () {
  var threat = {
  "id": "T13",
  "name": "Quishing via Malicious Barcode Injection",
  "desc": "A [=E3|verifier=] expects to scan a Verifiable Credential Barcode but is presented with a barcode that is not a VCB and is instead crafted to hijack the interaction. Because the verifier's pipeline must process untrusted optical input before and during verification, the malicious payload can target the external technologies the verifier depends on: the optical barcode scanner and decoder, the JSON-LD and CBOR-LD processors (through malformed, deeply nested, or term-confusing input), the HTTP client (by inducing requests to attacker-controlled endpoints via fields such as <code>terseStatusListBaseUrl</code> or <code>verificationMethod</code>, enabling server-side request forgery, phishing, or tracking), and the cryptographic hardware or software. A defect anywhere in this chain can be exploited even though no valid VCB is ever involved.",
  "response": [
    {
      "id": "R13",
      "name": "Treat Scanned Barcodes as Untrusted Across the Whole Pipeline",
      "type": "Reduce",
      "desc": "[=E3|Verifier=] implementations treat scanned bytes as untrusted at every stage with hardened, bounded [=P3|decoding=] that fails closed on malformed input and an allowlist so that [=F3|key resolution=] and [=F4|status=] requests reach only pre-configured trusted hosts rather than URLs taken from the scanned payload. Processing is isolated, and no scanned data is surfaced or acted upon until a valid VCB proof from a trusted [=E1|issuer=] has been confirmed."
    }
  ],
  "elements": [
    "P3",
    "P4",
    "F3",
    "F4",
    "S2",
    "C3",
    "E3"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Elevation of Privilege"
};

  window.ThreatModel.register(threat);
})();
