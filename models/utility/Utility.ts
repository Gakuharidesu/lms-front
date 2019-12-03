import { sortColumns } from '@/const/sort'

namespace Utility {

    /**
   * ソート関連の値をAPIリクエスト用に変換する
   *
   * @param descending 降順ならtrue、そうでないならfalse
   * @param sortBy ソートする画面項目
   */
  export function convertSortValue(descending: boolean, sortBy: string) {
    const sign: string = descending ? '' : '-'
    sortBy = getSortBy(sortBy)
    const snakeParamValue: string = sortBy
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()

    return sign + snakeParamValue
  }

  /**
   * エラーレスポンスメッセージを置換する
   *
   * @param response エラーレスポンスメッセージ
   * @param before 置換前の項目名
   * @param after 置換後の項目名
   */
  export function replaceResponsePrefix(
    response: string,
    before: string,
    after: string
  ) {
    const str = response.toString()
    return str.replace(new RegExp(`([0-9].${before})`, 'g'), after)
  }

  /**
   * sortByを取得する
   *
   * @param sortBy ソートする画面項目
   */
  function getSortBy(sortBy: string) {
    const sortColumn: string[] = Object.keys(sortColumns).filter(
      (column) => column === sortBy
    )

    if (sortColumn.length === 0) {
      return sortBy
    }

    return sortColumns[sortColumn[0]]
  }
}

export { Utility }
