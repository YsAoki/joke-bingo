
// 汎用性のある、全体で使用可能な関数を使用する。

// 引数に与えられた内容がbool値で返却される。
export const boolChecker = (target: any): boolean => {
  return target? true: false;
}
