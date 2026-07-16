(function () {
  var threat = {
  "id": "T18",
  "name": "Cryptographically Relevant Quantum Computer Breaks ECDSA",
  "desc": "The authenticity and integrity guarantees of credentials signed with the <code>ecdsa-xi-2023</code> cryptosuite or other ECDSA-based Data Integrity cryptosuites rely on non-compromise of the ECDSA signature scheme. A sufficiently powerful cryptographically relevant quantum computer (CRQC) could forge ECDSA signatures without the [=E1|issuer=]'s private key and/or allow for direct key compromise.",
  "response": [
    {
      "id": "R18",
      "name": "Algorithm Agility and Post-Quantum Migration Planning",
      "type": "Reduce",
      "desc": "Deployers monitor post-quantum signature standardization and rely on the cryptosuite-based, algorithm-agile design so that signature suites can be swapped without redesigning the encoding pipeline. [=E1|Issuers=] plan migration timelines that account for the long validity periods of physical documents. Generic defenses against Verifiable Credential forgery or signing key compromise such as the publication of indexed hash witness lists can also be applied to mitigate the quantum threat."
    }
  ],
  "elements": [
    "E1",
    "E3",
    "O1",
    "O2",
    "O4",
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
