import usePageTitle from '../../core/hooks/usePageTitle'
import PostForm from '../features/PostForm'
import DefaultLayout from '../layouts/Default'

function PostCreateView() {
  usePageTitle('Novo post')
  return (
    <DefaultLayout>
      <PostForm />
    </DefaultLayout>
  )
}

export default PostCreateView
