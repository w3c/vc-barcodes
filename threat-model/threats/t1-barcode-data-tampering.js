(function () {
  var threat = {
  "id": "T1",
  "name": "Barcode Data Tampering",
  "desc": "An attacker alters the machine-readable data on a physical document, such as a PDF417 on a driver's license or a machine-readable zone of a travel document, after it has been issued in order to change attributes such as date of birth, expiration date, or document number. Because off-the-shelf barcode generation and scanning libraries make optical data trivial to generate, a barcode with unsecured contents offers no assurance that its data matches what the [=E1|issuing authority=] originally encoded.",
  "response": [
    {
      "id": "R1",
      "name": "Digital Signature over Optical Data",
      "type": "Eliminate",
      "desc": "The <code>ecdsa-xi-2023</code> cryptosuite extends <code>ecdsa-rdfc-2019</code> by hashing canonicalized machine-readable information ([=O2|optical data bytes=]) as \"extra information\" and including that hash in the data protected by the [=E1|issuer=]'s signature. During [=P4|proof verification=], the [=E3|verifier=] reconstructs the [=O2|optical data bytes=] from the freshly scanned document and recomputes the hash; any modification to a protected field causes signature verification to fail. This makes tampering with signed optical data detectable."
    }
  ],
  "elements": [
    "S4",
    "O1",
    "O2",
    "P1",
    "P4"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Tampering"
};

  window.ThreatModel.register(threat);
})();
