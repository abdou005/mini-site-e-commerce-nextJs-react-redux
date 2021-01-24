import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const SearchProducts = () => {
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <div className="col-sm-4">

      <input type="text" style={{ marginTop: '30px' }} placeholder="Search products..." value={keyword} onChange={handleChange} />
      <Link href={`/search?q=${keyword}`} >
        <a>
          <input type="button" value="Search" />
        </a>
      </Link>
    </div >
  )
}
export default SearchProducts