import { khodams } from "@/datas/khodams";

export const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

export const getKhodamByName = (name: string) => {
  const index = Math.abs(hashCode(name)) % khodams.length;
  return khodams[index];
};
