

const Posts = async({params}) => {
    const {slug}= await params
    console.log(slug);
    
  return (
    <div>
        <h1>Posts</h1>
    </div>
  )
}

export default Posts