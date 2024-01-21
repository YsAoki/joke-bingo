// データの送信にまつわる関数を記入する
import { ListItem } from "../types/types";

// ListItemを複数持つ配列を引き渡すことで、配列を参照にしたbool値（false）を初期値に持った値を返却できる。
// accは累積変数の略称。第二引数には初期値を設定。（空のオブジェクトを使う)
export const createBoolArray = (items: ListItem[]): { [id: string]: boolean } => {
  const createVal =  items.reduce((acc, item) => {
    acc[item.id] = false;
    return acc;
  }, {} as { [id: string]: boolean });
  return createVal;
};

// 配列から、trueの値を持っているkey名を抽出、配列として返却する、
export const extractHaveTrue = (items: { [id: string]: boolean }): string[] => {
  const trueItems = Object.entries(items).filter(([key, value]) => value === true);
  const extractedKeys = trueItems.map(([key, value]) => key);
  return extractedKeys;
};

// オブジェクトが持つキーvalueの値を逆転する。
export const arrayKeyValInvert = (obj: { [key: string]: string }): { [key: string]: string } => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    acc[value] = key;
    return acc;
  }, {} as {[key: string] : string});
};


// 文字列をnumberに変換する。
export const convertStrForNum = (
  keysArray: string[], 
  reference: { [key: string]: string }
): number[] => {
  const convertedValue = keysArray.map(key => {
    const foundKey = Object.keys(reference).find(k => reference[k] === key);
    return foundKey ? parseInt(foundKey) : null;
  })
  const extractedFilterNull = convertedValue.filter((key): key is number => key !== null);
  return extractedFilterNull;
};
// この関数は、string[]配列を受け取ることと、number型(keyだからstring値になっているオブジェクト型のmapを受け取ることができる) 
// 戻り値は、number型の配列であるということ。
// まずは、受け取った文字列型の配列を受け取っている、

// numberを文字列に変換する
export const convertNumsToStr = (
  numsArray: number[], 
  reference: { [key: string]: string }
): string[] => {
  const convertedValue = numsArray.map(num => {
    return reference[num.toString()] || null;
  }).filter((value): value is string => value !== null);
  return convertedValue;
};