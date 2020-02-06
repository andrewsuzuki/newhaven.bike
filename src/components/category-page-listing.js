import React from "react"
import { Link } from "gatsby"

import contentPages from "../content-pages.json"

const CategoryPageListing = ({ category }) => {
  const filtered =
    category === "community"
      ? contentPages
          .filter(p => p.category === "community")
          .concat([contentPages.find(p => p.to === "/rides/group-rides")])
          .filter(a => a)
      : contentPages.filter(contentPage => contentPage.category === category)

  return (
    <div className="category-listing">
      {filtered.map(({ to, title, subtitle, emojis }) => (
        <div className="category-listing-page" key={to}>
          <Link to={to} title={title}>
            {title}
            {emojis && emojis.length > 0 && (
              <>
                {" "}
                {emojis.map(([emoji, label], i) => (
                  <span role="img" aria-labelledby={label} key={i}>
                    {emoji}
                  </span>
                ))}
              </>
            )}
          </Link>
          {subtitle && <span className="subtitle">{subtitle}</span>}
        </div>
      ))}
    </div>
  )
}

export default CategoryPageListing
