import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../features/PostsList"
import UserEarnings from "../features/UserEarnings"
import UserPerformance from "../features/UserPerformance"
import UserToptags from "../features/UserToptags"
import DefaultLayout from "../layouts/Default"


export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 32 }}>
      <UserToptags />
      <UserEarnings />
    </div>
    <UserPerformance />
    <PostList />
  </DefaultLayout>
}