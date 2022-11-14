import React from 'react'

const WidgetTags = () => {
  const tags=['c','c++','c#','html','css','javascript','reactjs','angularjs','java','mysql','python','golang','mongodb','expressjs','nodejs','php']
  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
        tags.map((tag) => (
          <p key={tag}>{tag} </p>

        ))
}


      </div>
    </div>
  )
}

export default WidgetTags