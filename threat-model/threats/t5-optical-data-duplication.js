(function () {
  var threat = {
  "id": "T5",
  "name": "Optical Data Duplication",
  "desc": "Optical barcode technologies provide no inherent protection against copying: the exact bytes of a barcode can be read with commodity scanners and reproduced with commodity generators, so a byte-for-byte copy verifies identically to the original. An attacker exploits this by copying a valid, signed barcode from a genuine document and reproducing it on a fraudulent document. Because the duplicated barcode contains an authentic [=E1|issuer=] signature — over the same [=O2|optical data=] for an [=O1|OpticalBarcodeCredential=], or over the credential's own claims for a [=O4|generic verifiable credential=] — it passes [=P4|proof verification=] exactly like the original. The duplication defense — confirming the signed data matches the person presenting it and/or the document the barcode is present on — is only as strong as how uniquely the signed fields identify a holder or document. For identity documents whose signed attributes are coarse and not biometrically bound, a cloned barcode can be presented by a different person who happens to match those coarse attributes.",
  "response": [
    {
      "id": "R5.1",
      "name": "Three-Way Match Strengthened by Uniquely-Identifying Signed Data",
      "type": "Reduce",
      "desc": "During [=P5|identity and attribute cross-check=], the [=E3|verifier=] confirms that the signed data matches the human-readable data on the document, that the signed data matches the physical attributes of the person presenting it, and that the visible data matches that person. To make this match meaningful, [=E1|issuers=] include uniquely-identifying or biometrically-bound data among the signed fields wherever the use case permits, and [=E3|verifiers=] treat documents whose signed data is only coarsely identifying as providing weaker holder-binding assurance, since a clone matching coarse attributes is more likely to succeed."
    },
    {
      "id": "R5.2",
      "name": "Do Not Rely on Barcode Unclonability",
      "type": "Transfer",
      "desc": "Because the optical medium cannot prevent copying, remaining defenses are transferred to other layers: verification-time checks match the credential to the [=E2|holder=] and document and [=P6|status checks=] limit the useful lifetime of a copied credential. [=E1|Issuers=] and [=E3|verifiers=] do not treat the barcode itself as unclonable."
    }
  ],
  "elements": [
    "E2",
    "E3",
    "O1",
    "O2",
    "O4",
    "P3",
    "P4",
    "P5",
    "S4"
  ],
  "tags": [
    "safety",
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
