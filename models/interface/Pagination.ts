export default interface Pagination {
  // 昇順・降順
  descending: boolean
  
  // ページNo
  page: number
  
  // ページ件数
  rowsPerPage: number
  
  // ソートカラム
  sortBy: string
  
  // トータル件数
  totalItems: number
  
  // トータルページ数
  lastPage: number
  
  // APIを叩く際に送る整形済みソートパラメータ
  sort: string
}
