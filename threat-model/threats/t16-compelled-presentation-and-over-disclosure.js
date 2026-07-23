(function () {
  var threat = {
  "id": "T16",
  "name": "Over-Disclosure due to Compelled Presentation",
  "desc": "A Verifiable Credential embedded in an optical barcode is a static, all-or-nothing artifact: presenting the barcode discloses every signed attribute it carries, with no mechanism for selective disclosure. A [=E2|holder=] compelled to present the document for one purpose necessarily reveals all of its signed contents, potentially exposing more personal information than the interaction requires.",
  "response": [
    {
      "id": "R16.1",
      "name": "Data Minimization at Issuance",
      "type": "Reduce",
      "desc": "[=E1|Issuers=] can mitigate over-disclosure up front by encoding only the attributes essential to the document's purpose, and ecosystems that require minimal disclosure at presentation can consider complementary credentials in other forms."
    },
    {
      "id": "R16.2",
      "name": "Do Not Use Optical Barcodes When Selective Disclosure is a Requirement",
      "type": "Accept",
      "desc": "Because the optical barcode carries a static signature over a fixed field set, selective disclosure at presentation time is not available within this specification. The lack of selective disclosure capability of a static barcode is acknowledged and accepted for the use cases this specification targets."
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
