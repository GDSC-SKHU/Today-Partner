export function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function makePairs(members: { name: string; part: string }[]) {
  let pairs: { name: string; part: string }[][] = [];
  
  for (let i = 0; i < members.length; i += 2) {
    if (i === members.length - 1) {
      pairs.push([members[i]]);
    } else {
      pairs.push([members[i], members[i + 1]]);
    }
  }

  return pairs;
}