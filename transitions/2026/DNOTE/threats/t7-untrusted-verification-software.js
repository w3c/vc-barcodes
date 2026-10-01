(function () {
  var threat = {
  "id": "T7",
  "name": "Untrusted Verification Software",
  "desc": "A [=E3|verifier=] uses an untrusted application or interface to scan and validate a Verifiable Credential Barcode. Malicious verification software can falsely report a fraudulent credential as valid, suppress a failed status check, or exfiltrate the personal data read from the [=S4|document=].",
  "response": [
    {
      "id": "R7",
      "name": "Use Trusted Verification Programs and Interfaces",
      "type": "Reduce",
      "desc": "[=E3|Verifiers=] use only trusted, vetted programs and interfaces to perform [=P3|scanning=] and [=P4|verification=]. Deployers establish provenance for verification software (for example signed builds from a known supplier and controlled distribution channels), and treat the verification tool itself as a security-sensitive component whose compromise would defeat the protections this specification provides."
    }
  ],
  "elements": [
    "C3",
    "E3",
    "O1",
    "O4",
    "P3",
    "P4",
    "P5"
  ],
  "tags": [
    "security",
    "privacy"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Tampering"
};

  window.ThreatModel.register(threat);
})();
