(function () {
  var threat = {
  "id": "T15",
  "name": "Correlation via Status List Retrieval",
  "desc": "The <code>terseStatusListBaseUrl</code> and <code>terseStatusListIndex</code> position a document within a specific [=O3|status list=]. When a [=E3|verifier=] performs an online [=P6|status check=], the host of the [=S2|status list store=] observes the request, learns that a verification involving that list is occurring, and can correlate it with the verifier's network origin and time. Over many verifications, the [=E1|issuer=] or list host can build a picture of where and when documents are checked.",
  "response": [
    {
      "id": "R15",
      "name": "Group Privacy in Status Lists and Cacheable Retrieval",
      "type": "Reduce",
      "desc": "The design of the bitstring status list groups many documents into a single shared list so that fetching it only reveals interest in the list, not in a specific [=E2|holder=]. Status lists are sized to preserve adequate herd privacy. Static, cacheable hosting behind a content distribution network (CDN) lets a [=E3|verifier=] retrieve a whole list and reuse it, reducing the frequency and granularity observable by the verification list host."
    }
  ],
  "elements": [
    "E1",
    "F4",
    "O1",
    "O3",
    "O4",
    "P6",
    "S2"
  ],
  "tags": [
    "privacy"
  ],
  "taxonomyName": "STRIDE",
  "taxonomyClass": "Information Disclosure"
};

  window.ThreatModel.register(threat);
})();
