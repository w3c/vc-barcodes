(function () {
  var threat = {
  "id": "T20",
  "name": "Spoofing of Key Resolution and/or Key Management",
  "desc": "To check a proof, the [=E3|verifier=] obtains the [=E1|issuer=]'s key material from wherever the <code>verificationMethod</code> points, such as a <code>did:web</code> identifier backed by DNS and a web server. An attacker who controls or redirects where keys are made available — through domain hijacking, DNS subversion, web-host compromise, or weaknesses in the issuer's key management and publication practices — can cause the verifier to validate attacker-signed credentials of either kind as if they came from the legitimate [=E1|issuer=].",
  "response": [
    {
      "id": "R20",
      "name": "Pin Trust Anchors and Govern Key Management",
      "type": "Reduce",
      "desc": "[=E3|Verifiers=] pin trusted [=E1|issuer=] keys in the [=S3|trust store=] rather than trusting whatever a live resolution returns, and treat unexpected key changes as cause to decline pending out-of-band confirmation. [=E1|Issuers=] harden the infrastructure they use to publish their keys and adopt clear key-management governance such as defined authoritative key locations, documented provenance, and routine rotation."
    }
  ],
  "elements": [
    "F3",
    "P4",
    "S3",
    "E1",
    "E3"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
