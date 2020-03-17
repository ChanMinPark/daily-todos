import { useRouter } from 'next/router'

function Posts() {
  const router = useRouter()
  const query = router.query
  
  return (
    <div>
      This page is 'posts/{query.pid}'<br />
      Whole router.query = {JSON.stringify(query)} 
    </div>
  )
}

export default Posts