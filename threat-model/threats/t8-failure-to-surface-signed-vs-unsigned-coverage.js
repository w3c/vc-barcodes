(function () {
  var threat = {
  "id": "T8",
  "name": "Failure to Surface Signed-vs-Unsigned Coverage",
  "desc": "Not all information on a physical document is necessarily covered by a credential's digital signature: an <code>OpticalBarcodeCredential</code>'s [=O2|signature=] covers only selected machine-readable data, and a [=O4|generic verifiable credential=]'s signature covers nothing outside the credential at all. If a [=E3|verifier=]'s software presents decoded data without indicating which fields are protected or unprotected, a human operator may give unsigned, tamperable data the same trust as signed data, defeating the integrity guarantee even though the proof verifies.",
  "response": [
    {
      "id": "R8",
      "name": "Correctly Surface What Is and Is Not Covered",
      "type": "Reduce",
      "desc": "[=E3|Verifier=] software derives the protected field set from the component extraction rules of the <code>credentialSubject</code> type and clearly surfaces, per field, what is and is not secured by the [=O2|signature=]: displaying only signed data during verification, or explicitly marking unsigned values as unverified. For a [=O4|generic verifiable credential=], the software makes clear that only the credential's own claims are attested. Discrepancies between the signed data, the visible document, and the [=E2|holder=] are surfaced to the operator rather than silently resolved. Operators are thereby prevented from basing trust decisions on data not digitally signed by the [=E1|issuer=]."
    }
  ],
  "elements": [
    "E2",
    "E3",
    "E4",
    "O1",
    "O2",
    "O4",
    "P5",
    "S4"
  ],
  "tags": [
    "safety"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
