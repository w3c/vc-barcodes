(
  function () {
    var threatCategories = [{
      name: "Target Threats",
      id: "threat-model-target-threats",
      threats: ["T1", "T2", "T3", "T4"]
    },
    {
      name: "Implementation Threats",
      id: "threat-model-implementation-threats",
      threats: ["T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T23"]
    },
    {
      name: "External Threats",
      id: "threat-model-external-threats",
      threats: ["T14", "T15", "T16", "T17"]
    },
    {
      name: "Dependency Threats",
      id: "threat-model-dependency-threats",
      threats: ["T18", "T13", "T22", "T19", "T20", "T21"]
    }
    ];

    window.ThreatModel.registerCategories(threatCategories);

    window.ThreatModel.registerElements({
      "E1": "E1: Issuing Authority",
      "E2": "E2: Holder",
      "E3": "E3: Verifier",
      "E4": "E4: Document Manufacturer",
      "P1": "P1: Credential Creation and Signing",
      "P2": "P2: CBOR-LD Compression and Encoding",
      "P3": "P3: Barcode Scan and Decode",
      "P4": "P4: Proof Verification",
      "P5": "P5: Identity and Attribute Cross-Check",
      "P6": "P6: Status Check",
      "P7": "P7: Status List Publication",
      "P8": "P8: Barcode Rendering and Personalization",
      "F1": "F1: Render and Print Barcode",
      "F2": "F2: Present Document",
      "F3": "F3: Resolve Verification Method",
      "F4": "F4: Fetch Status List",
      "F5": "F5: Publish Status",
      "S1": "S1: Issuer Key Store",
      "S2": "S2: Status List Store",
      "S3": "S3: Verifier Trust Store",
      "S4": "S4: Physical Document",
      "O1": "O1: OpticalBarcodeCredential",
      "O2": "O2: Optical Data Bytes (xi)",
      "O3": "O3: BitstringStatusListCredential",
      "O4": "O4: Generic Verifiable Credential Expressed as Barcode",
      "C1": "C1: Issuer System",
      "C2": "C2: Manufacturer System",
      "C3": "C3: Verifier System",
      "DID": "DID: External Verification-Method Resolution"
    });

  })();
