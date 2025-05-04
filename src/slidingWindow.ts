function maximumLengthSubstring(s: string): number {
  let l = 0;
  let r = 0;
  let maxLength = 1;

  const counter: Record<string, number> = {};

  counter[s[0]] = 1;

  while (r < s.length - 1) {
    r += 1;

    // Incrementa o contador para o caractere atual
    counter[s[r]] = (counter[s[r]] || 0) + 1;

    // Enquanto o caractere atual aparece 3 vezes, move a janela
    while (counter[s[r]] === 3) {
      counter[s[1]]--;
      l++;
    }

    maxLength = Math.max(maxLength, r - 1 + 1);
  }

  return maxLength;
}
