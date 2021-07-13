import React from 'react'
import Navs from './Navs'
import Title from './Title'

function MainPageLayout({ children }) {
    return (
        <div>
            <Title
                title='Box Office'
                subTitle='Look for movies and actors'
            />
            <Navs />
            {children}

        </div>
    )
}

export default MainPageLayout
