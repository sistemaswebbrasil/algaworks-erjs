import usePageTitle from "../../core/hooks/usePageTitle"
import PostList from "../features/PostsList"
import UserPerformance from "../features/UserPerformance"
import DefaultLayout from "../layouts/Default"
import UserToptags from "./UserToptags"

export default function Home () {
  usePageTitle('Home')

  return <DefaultLayout>
    <UserToptags />
    <UserPerformance />
    <PostList />
  </DefaultLayout>
}