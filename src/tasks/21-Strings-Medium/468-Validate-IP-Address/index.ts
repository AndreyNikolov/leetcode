function validIPAddress(queryIP: string): string {
  const v4Candidate = queryIP.split(".");
  if (v4Candidate.length === 4) {
    for (let fragment of v4Candidate) {
      if (
        (fragment[0] === "0" && fragment.length > 1) ||
        fragment === "" ||
        Number(fragment) < 0 ||
        Number(fragment) > 255 ||
        !/^\d+$/.test(fragment)
      ) {
        return "Neither";
      }
    }

    return "IPv4";
  }

  const v6Candidate = queryIP.split(":");
  if (v6Candidate.length === 8) {
    for (let fragment of v6Candidate) {
      if (fragment.length === 0 || fragment.length > 4) return "Neither";
      if (!/^[a-fA-F0-9]+$/.test(fragment)) return "Neither";
    }
    return "IPv6";
  }

  return "Neither";
}
