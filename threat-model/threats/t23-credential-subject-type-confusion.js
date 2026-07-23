(function () {
  var threat = {
  "id": "T23",
  "name": "Confusion among Types of Credential Subject",
  "desc": "Every <code>credentialSubject</code> used with an [=O1|OpticalBarcodeCredential=] is typed as a subclass of the general <code>MachineReadableInformation</code> superclass, and other specifications may define additional subclasses. Each subclass carries its own definition of the optical data it secures, its component extraction rules, and its character encoding. A [=E3|verifier=] that processes a credential under the wrong subclass's rules can reconstruct different [=O2|optical data bytes=] than the [=E1|issuer=] signed, mis-scope which fields are protected, or accept a credential whose type-specific checks were never performed.",
  "response": [
    {
      "id": "R23",
      "name": "Verify Only Under Recognized, Exactly-Matched Types",
      "type": "Reduce",
      "desc": "[=E3|Verifiers=] with specific assurance requirements verify a credential only under a <code>credentialSubject</code> subclass they recognize and support, applying that subclass's component extraction and encoding rules exactly. Credentials whose specific subclass is unrecognized, ambiguous, or otherwise inconsistent with the presentation are rejected rather than processed generically, and deployers vet third-party subclass definitions before adding them to the set a verifier accepts."
    }
  ],
  "elements": [
    "O1",
    "O2",
    "P3",
    "P4",
    "E3",
    "E1"
  ],
  "tags": [
    "security",
    "interoperability"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
