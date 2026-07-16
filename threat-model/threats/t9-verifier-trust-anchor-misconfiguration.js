(function () {
  var threat = {
  "id": "T9",
  "name": "Verifier Trust Anchor Misconfiguration",
  "desc": "A high-assurance [=E3|verifier=]'s [=S3|trust store=] determines which [=E1|issuing authorities=] are considered authoritative. If that store is configured with an overly broad set of issuers, with a stale or attacker-supplied key, or with no effective constraint at all, the [=E3|verifier=] may accept credentials signed by entities that are not legitimately authoritative for the document type being presented.",
  "response": [
    {
      "id": "R9",
      "name": "Curated, Maintained Trust Store",
      "type": "Reduce",
      "desc": "During [=P3|verifier configuration=], deployers populate the [=S3|trust store=] with a curated set of [=E1|issuer=] identifiers and verification methods appropriate to the documents they accept and the level of assurance they require, and maintain it as issuer keys rotate. The [=E3|verifier=] scopes acceptance to issuers authoritative for the presented document type, so a key valid for one ecosystem cannot be used to vouch for documents in another."
    }
  ],
  "elements": [
    "E1",
    "E3",
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
