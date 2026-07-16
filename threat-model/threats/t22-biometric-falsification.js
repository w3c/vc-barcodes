(function () {
  var threat = {
  "id": "T22",
  "name": "Biometric Falsification",
  "desc": "Where a credential's holder-binding relies on biometric data such as a facial image, that biometric can itself be cloned or replayed. Images of individuals are easy to copy and present, so a [=E3|verifier=] or an automated check that relies on such a biometric can be induced to register a false positive, undermining the holder-binding that defenses such as the [=P5|three-way match=] depend on. This weakness is inherited from the biometric technologies themselves rather than introduced by this specification.",
  "response": [
    {
      "id": "R22",
      "name": "Replay-Resistant, Multi-Factor Biometric Verification",
      "type": "Reduce",
      "desc": "Where biometric binding is used, [=E3|verifiers=] employ checks resistant to replay and presentation attacks (for example liveness detection and trained human review), avoid relying on a single easily-cloned modality, and combine biometric evidence with other signed identifying attributes carried by the [=O1|credential=]. The residual risk that a sufficiently faithful biometric clone defeats the check is acknowledged as inherited from the biometric dependency."
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
