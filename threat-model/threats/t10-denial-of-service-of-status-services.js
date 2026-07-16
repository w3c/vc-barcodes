(function () {
  var threat = {
  "id": "T10",
  "name": "Denial of Service of Status Services",
  "desc": "When a [=E3|verifier=] performs an online [=P6|status check=], it depends on the status services that host the [=O3|status list=] named by <code>terseStatusListBaseUrl</code>. An attacker who renders those services unreachable — through network disruption, volumetric attack, or compromise of the [=S2|status list store=] or its hosting infrastructure — prevents verifiers from performing status checks, creating a tension between availability and assurance.",
  "response": [
    {
      "id": "R10",
      "name": "Resilient Status Hosting and an Explicit Failure Policy",
      "type": "Reduce",
      "desc": "[=E1|Issuers=] host [=O3|status lists=] on resilient, scalable infrastructure (for example static files behind a content distribution network) so the bitstring format's efficient, cacheable retrieval can absorb load. [=E3|Verifiers=] adopt an explicit policy for unreachable status — declining in high-assurance contexts rather than failing open — and use short-lived cached results to ride out transient outages without indefinitely trusting stale data."
    }
  ],
  "elements": [
    "S2",
    "F4",
    "P6",
    "O3",
    "E3"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Denial of Service"
};

  window.ThreatModel.register(threat);
})();
