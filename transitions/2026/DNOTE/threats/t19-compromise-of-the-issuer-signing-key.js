(function () {
  var threat = {
  "id": "T19",
  "name": "Compromise of the Issuer's Signing Key",
  "desc": "The Verifiable Credential Barcode trust model depends on the secrecy of the [=E1|issuing authority=]'s private signing key held in the [=S1|issuer key store=]. An attacker who obtains that key can mint valid credentials over any claims they choose, producing fraudulent documents that pass [=P4|verification=] indistinguishably from genuine documents.",
  "response": [
    {
      "id": "R19",
      "name": "Protect Keys and Enable Rapid Revocation and Rotation",
      "type": "Reduce",
      "desc": "[=E1|Issuers=] generate and use signing keys within hardware security modules, enforce strict access control around the [=S1|key store=], and monitor for misuse. On suspicion of compromise, the affected verification method is rotated and removed from [=E3|verifier=] [=S3|trust stores=], and documents signed by the compromised key are revoked or suspended through the [=O3|status list=]. Defensive techniques for Verifiable Credential key compromise and forgery - such as the publication of indexed hash witness lists - can also be applied."
    }
  ],
  "elements": [
    "E1",
    "O1",
    "O4",
    "P1",
    "P6",
    "S1",
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
