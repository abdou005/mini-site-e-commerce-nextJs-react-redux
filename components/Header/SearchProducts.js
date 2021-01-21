import React from 'react'

const SearchProducts = ({ keyword }) => {

  const handleChange = () => {
    console.log('ssds')
  }
  return (
    <div className="col-sm-4">
      <input type="text" style={{ marginTop: '30px' }} placeholder="Search products..." value={keyword} onChange={handleChange} />
      <a>
        {/* //href={"/search/q=" + keyword} */}
        <input type="button" value="Search" />
      </a>
    </div>
  )
}
export default SearchProducts