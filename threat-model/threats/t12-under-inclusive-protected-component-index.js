(function () {
  var threat = {
  "id": "T12",
  "name": "Under-Inclusive Protected Component Index",
  "desc": "The <code>protectedComponentIndex</code> lets an [=E1|issuer=] choose which machine-readable data are bound into [=O2|optical data bytes=] and thus covered by a digital signature. An [=E1|issuer=] that sets too few bits — protecting only a small subset of fields — produces credentials that still verify successfully while leaving most of the document's data outside the signature and therefore freely modifiable. A [=E3|verifier=] that does not inspect how much is actually protected may overestimate the assurance a passing signature provides.",
  "response": [
    {
      "id": "R12",
      "name": "Maximize Protected Coverage and Surface It to Verifiers",
      "type": "Reduce",
      "desc": "[=E1|Issuers=] set <code>protectedComponentIndex</code> to cover as much data as the issuance pipeline permits. [=E3|Verifier=] software decodes the index, surfaces which fields are protected, and lets deployers require a minimum protected set before accepting a document — so a sparsely signed credential cannot silently pass as a fully protected one. Malformed indices are rejected."
    }
  ],
  "elements": [
    "O1",
    "O2",
    "P1",
    "P5",
    "E1",
    "E3"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Tampering"
};

  window.ThreatModel.register(threat);
})();
