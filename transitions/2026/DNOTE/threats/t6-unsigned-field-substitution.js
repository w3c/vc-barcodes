(function () {
  var threat = {
  "id": "T6",
  "name": "Unsigned-Field Substitution",
  "desc": "Not all data in an optical barcode is necessarily covered by a Verifiable Credential Barcode's digital signature. The <code>protectedComponentIndex</code> selects which data are integrated into the [=O2|optical data bytes=], and some data, such as a serial number injected after credential issuance time by a [=E4|document manufacturer=], may be unsignable. For a [=O4|generic verifiable credential=], the signature covers nothing outside the credential at all, so every other machine-readable and printed element of the document is effectively unsigned. An attacker can modify any unsigned data without invalidating the credential's proof, such altering unsigned barcode fields, changing visible document content, or pairing a genuine barcode with an otherwise-altered or substituted document, and a [=E3|verifier=] who relies on that data for fraud detection can be deceived even though the signature still verifies.",
  "response": [
    {
      "id": "R6",
      "name": "Rely Only on Signed Fields",
      "type": "Reduce",
      "desc": "Implementers of [=E3|verifier=] software determine exactly which fields are protected by the [=O2|signature=] and base all fraud-detection decisions solely on those fields, no matter how commonly an unsigned field is used on legacy documents without cryptographic security. For example, if eye color and hair color are signed but the portrait is not, the [=E3|verifier=] emphasizes the signed attributes when checking the [=E2|holder=]. Unsigned data (including, for a [=O4|generic verifiable credential=], everything on the document beyond the credential's own claims) is treated as potentially tampered."
    }
  ],
  "elements": [
    "E3",
    "E4",
    "O1",
    "O2",
    "O4",
    "P5",
    "S4"
  ],
  "tags": [
    "safety",
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Tampering"
};

  window.ThreatModel.register(threat);
})();
