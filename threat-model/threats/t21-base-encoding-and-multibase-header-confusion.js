(function () {
  var threat = {
  "id": "T21",
  "name": "Confusion between Base-Encoding and Multibase Header",
  "desc": "Before reaching a barcode, a credential of either kind is compressed with CBOR-LD and then character-encoded according to rules that are defined per <code>credentialSubject</code> type. A mismatch between what the [=E4|document manufacturer=] encoded and what the [=E3|verifier=] assumes for that type — such as a missing prefix, an unexpected header, a wrong base alphabet, or the rules for a different subclass applied incorrectly — causes the verifier to decode different bytes than were signed, producing failures or, in adversarial cases, decoding ambiguities that can be exploited.",
  "response": [
    {
      "id": "R21",
      "name": "Strict, Convention-Conformant Encoding and Decoding",
      "type": "Reduce",
      "desc": "Implementations follow the character-encoding requirements of the specific <code>credentialSubject</code> type exactly as defined in the specification that defines that type. [=E3|Verifiers=] determine the expected encoding from the document and barcode formats, validate the expected prefix and header before decoding, and reject inputs that do not conform, so that the bytes verified are unambiguously the bytes that were signed."
    }
  ],
  "elements": [
    "E3",
    "E4",
    "O1",
    "O4",
    "P2",
    "P3",
    "S4"
  ],
  "tags": [
    "interoperability",
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Tampering"
};

  window.ThreatModel.register(threat);
})();
