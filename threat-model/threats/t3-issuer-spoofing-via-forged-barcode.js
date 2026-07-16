(function () {
  var threat = {
  "id": "T3",
  "name": "Issuer Spoofing via Forged Barcode",
  "desc": "An attacker fabricates a credential — a [=O4|generic verifiable credential=] or an <code>OpticalBarcodeCredential</code> — from scratch and prints it onto a counterfeit document so that it appears to have been issued by a legitimate [=E1|issuing authority=] such as a state motor vehicle agency or a passport authority. If a [=E3|verifier=] accepts the contents of a barcode without verifying a cryptographic proof using a key controlled by a trusted [=E1|issuer=], the attacker can manufacture documents that assert any claims they choose.",
  "response": [
    {
      "id": "R3",
      "name": "Mandatory Proof Verification Against a Trusted Issuer",
      "type": "Reduce",
      "desc": "A Verifiable Barcode Credential carries a Data Integrity proof whose <code>verificationMethod</code> resolves to public key material controlled by the [=E1|issuing authority=]. During [=P4|proof verification=], the [=E3|verifier=] confirms the proof is valid and that the resolved [=E1|issuer=] appears in its [=S3|trust store=] of authoritative issuers. A barcode that does not verify against an acceptable key is rejected, so a forged barcode cannot impersonate a legitimate authority without also compromising that authority's signing key or key distribution mechanism."
    }
  ],
  "elements": [
    "E1",
    "E3",
    "F3",
    "O1",
    "O4",
    "P4",
    "S3"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
