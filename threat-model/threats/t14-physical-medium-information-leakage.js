(function () {
  var threat = {
  "id": "T14",
  "name": "Physical Medium Information Leakage or Theft",
  "desc": "Presenting a Verifiable Credential Barcode exposes information through the physical, optical medium in ways a digital credential presentation does not. The barcode can be captured without the [=E2|holder=]'s awareness or consent. For example, a high-resolution camera at a convenience store, or a scanner reading at a distance, can record the encoded bytes off the surface of the [=S4|document=]. Any data placed in the barcode can therefore be harvested by parties the [=E2|holder=] never intended to present to and combined across locations to track the holder. Physical documents can also be stolen.",
  "response": [
    {
      "id": "R14.1",
      "name": "Minimize Sensitive Data and Handle Documents Appropriately",
      "type": "Reduce",
      "desc": "[=E1|Issuers=] should minimize the amount of highly sensitive information that is placed in the barcode to the amount necessary for the document's purpose. Holders should be made aware that careless display of a document containing a barcode with sensitive information in it can result in information leakage. The residual risk that data in a barcode can be captured off the physical medium without the holder's awareness is acknowledged as out of scope for this specification."
    },
    {
      "id": "R14.2",
      "name": "Do Not Treat Verifiable Credential Barcodes as Defense Against Physical Theft",
      "type": "Accept",
      "desc": "Physical documents can be stolen. The digital signature mechanisms that Verifiable Credential Barcodes use to add security to the contents of a physical document are not protection against theft of the document."
    }
  ],
  "elements": [
    "E2",
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
