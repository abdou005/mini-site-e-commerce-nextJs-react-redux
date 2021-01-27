import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SearchProducts = () => {
  const router = useRouter()
  const initialKeyword = router.query.q
  const [keyword, setKeyword] = useState(initialKeyword ? initialKeyword : '')
  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <div className="col-sm-4">

      <input type="text" style={{ marginTop: '30px' }} placeholder="Search products..." value={keyword} onChange={handleChange} />
      <Link href={{
        pathname: "/search",
        query: { q: keyword }
      }} >
        <a>
          <input type="button" value="Search" />
        </a>
      </Link>
    </div >
  )
}
export default SearchProducts