(function () {
  var threat = {
  "id": "T4",
  "name": "Acceptance of a Revoked or Suspended Document",
  "desc": "A physical document undergoes a status change that should render it unusable — a driver's license is suspended for cause, a travel document is reported lost or stolen, an authorization is withdrawn — but the [=S4|document=] itself remains in circulation. An attacker, including the original [=E2|holder=], continues to use the document as though it were still valid. A [=E3|verifier=] with no ability to check the document's status in real time therefore has no way to detect the change, and continues to accept a document the [=E1|issuing authority=] no longer stands behind.",
  "response": [
    {
      "id": "R4",
      "name": "Real-Time Status via TerseBitstringStatusListEntry",
      "type": "Reduce",
      "desc": "A credential of either kind carries a <code>TerseBitstringStatusListEntry</code> that the [=E3|verifier=] expands into a <code>BitstringStatusListEntry</code> and uses to perform a [=P6|status check=] against the [=E1|issuer=]'s [=O3|status list=] — equipping verifiers with the real-time status capability that many physical documents lack, without a privacy-invasive per-document \"phone home\" to a source-of-truth database. A status change that renders the document invalid is thereby detectable at verification time. Verifiers in high-assurance contexts should treat a missing or unreachable status result as cause to decline rather than accept the document."
    }
  ],
  "elements": [
    "E1",
    "E2",
    "E3",
    "F4",
    "O1",
    "O3",
    "O4",
    "P6",
    "S2",
    "S4"
  ],
  "tags": [
    "security"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Elevation of Privilege"
};

  window.ThreatModel.register(threat);
})();
