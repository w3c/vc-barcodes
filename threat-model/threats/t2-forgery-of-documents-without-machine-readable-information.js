(function () {
  var threat = {
  "id": "T2",
  "name": "Forgery of Documents Without Machine-Readable Information",
  "desc": "Many physical documents are issued with no machine-readable information at all. Often, their authenticity can only be checked only by human inspection of physical anti-counterfeiting technologies, which advances in printing technology have outmoded. An attacker fabricates such a document, or alters a genuine one, and a [=E3|verifier=] has no cryptographic means to determine whether the document was issued by the claimed [=E1|authority=] or whether its contents match what was issued.",
  "response": [
    {
      "id": "R2",
      "name": "Machine-Verifiable Claims via a Generic Verifiable Credential Barcode",
      "type": "Reduce",
      "desc": "Encoding a [=O4|generic verifiable credential=] as a barcode on the document gives the [=E3|verifier=] a machine-readable, cryptographically verifiable statement of the [=E1|issuer=]'s claims: [=P4|proof verification=] establishes that the claims originate from the claimed issuer and have not been modified since issuance, and an optional <code>TerseBitstringStatusListEntry</code> enables a real-time [=P6|status check=]. The credential's signature covers only the claims it contains, so verifiers scope trust to the credential itself rather than to other content on the document."
    }
  ],
  "elements": [
    "E1",
    "E3",
    "O4",
    "P1",
    "P4",
    "P6",
    "S4"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
