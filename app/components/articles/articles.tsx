import React from 'react'
import ArticleCard from './articleCard'

const Articles = () => {
  return (
    <div className="w-full min-h-screen bg-background">
        <div className="grid justify-between gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
  )
}

export default Articles