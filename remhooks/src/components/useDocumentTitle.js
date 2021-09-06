// Custom Hoo always starts with 'use'

import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count: ${count}`
    },[count])
}

export default useDocumentTitle
