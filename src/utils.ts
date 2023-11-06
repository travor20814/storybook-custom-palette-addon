export function hex6ToHex8(hex6: string, alpha: number) {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex6)) {
    const prefix = Math.round(+alpha * 255);
    const alphaHex = (prefix + 0x10000).toString(16);

    return `${hex6}${alphaHex.substring(alphaHex.length - 2).toUpperCase()}`;
  }

  throw new Error('Bad Hex');
}
