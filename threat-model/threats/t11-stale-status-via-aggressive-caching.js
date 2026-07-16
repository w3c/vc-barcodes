(function () {
  var threat = {
  "id": "T11",
  "name": "Stale Status via Aggressive Caching",
  "desc": "To reduce load and protect privacy, a [=E3|verifier=] may cache a retrieved [=O3|status list=]. If caching is too aggressive, a document invalidated by a status change after the cache was populated could continue to be accepted, creating a window in which the [=E2|holder=] benefits from a status the [=E1|issuer=] no longer stands behind. The longer the validity period assumed for cached status, the larger this window.",
  "response": [
    {
      "id": "R11",
      "name": "Cache Lifetimes Matched to Risk",
      "type": "Reduce",
      "desc": "[=E3|Verifiers=] bound [=O3|status list=] cache lifetimes according to the risk of the decision, refreshing more frequently for higher-stakes verifications. [=E1|Issuers=] publish status updates promptly and communicate expected refresh cadence so verifiers can size cache lifetimes appropriately, balancing timeliness against the load and correlation costs of frequent fetches."
    }
  ],
  "elements": [
    "P6",
    "O3",
    "F4",
    "E3"
  ],
  "tags": [
    "security",
    "privacy"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Repudiation"
};

  window.ThreatModel.register(threat);
})();
