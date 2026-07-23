(function () {
  var threat = {
  "id": "T22",
  "name": "Biometric Falsification",
  "desc": "Where the connection between a holder and a credential relies on biometric data such as a facial image, that biometric can itself be cloned or replayed. Images of individuals are easy to copy and present, so a [=E3|verifier=] or an automated check that relies on such a biometric can be induced to register a false positive, undermining defenses such as the [=P5|three-way match=]. This weakness is inherited from the biometric technologies themselves rather than introduced by this specification.",
  "response": [
    {
      "id": "R22.1",
      "name": "Replay-Resistant, Multi-Factor Biometric Verification",
      "type": "Reduce",
      "desc": "Where biometric checks is used, [=E3|verifiers=] employ checks resistant to replay and presentation attacks (for example, liveness detection and/or trained human review); avoid relying on a single easily-cloned modality; and combine biometric evidence with other signed identifying attributes carried by the [=O1|credential=]."
    },
    {
      "id": "R22.2",
      "name": "Do Not Assume Infallibility of Biometric Verification",
      "type": "Accept",
      "desc": "Even when R22.1 is used, there is residual risk that sufficiently advanced attacks against a biometric defeat the check. This risk is acknowledged as inherited from the biometric dependency."
    }
  ],
  "elements": [
    "E2",
    "E3",
    "O1",
    "O4",
    "P5",
    "S4"
  ],
  "tags": [
    "security",
    "safety"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
