import React from 'react'
import "../../styles/Article.css"

function Article() {
  return (
    <div className='articlebar'>
       <div className="articlebarItem">
        <img
          src="https://www.fda.gov/files/styles/recall_image_large/public/30ml.jpg?itok=QxW5roPH"
          alt=""
        />
         <span className="sidebarTitle">
          <a href = "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/pharmedica-usa-llc-issues-voluntary-worldwide-recall-purely-soothing-15-msm-drops-due-non-sterility"> Article Title </a>
          </span>
      </div>
      
    </div>
  )
}

export default Article