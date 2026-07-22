(function () {
  var threat = {
  "id": "T17",
  "name": "Cross-Verifier Linkage of the Holder",
  "desc": "The signed barcode value on a given document is static and identical every time it is presented. Distinct [=E3|verifiers=] who scan the same document can use the unchanging credential bytes (and unique identifiers such as embedded status information) as a persistent correlator to link a [=E2|holder=]'s separate interactions into a single profile.",
  "response": [
    {
      "id": "R17.1",
      "name": "Acknowledge Static-Value Linkability",
      "type": "Accept",
      "desc": "A printed barcode is a fixed value and is therefore inherently linkable when presented repeatedly; this specification cannot make a static optical artifact unlinkable across verifiers. The linkability of a static barcode is acknowledged and accepted as a property of the optical medium."
    },
    {
      "id": "R17.2",
      "name": "Limit Linkage, Retention and Sharing of Credentials by Verifiers",
      "type": "Reduce",
      "desc": "Deployments can limit retention and sharing of scanned credential data through policy and governance, and ecosystems needing presentation-time unlinkability can adopt complementary mechanisms."
    }
  ],
  "elements": [
    "E2",
    "E3",
    "O1",
    "O4",
    "S4"
  ],
  "tags": [
    "privacy"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Information Disclosure"
};

  window.ThreatModel.register(threat);
})();
