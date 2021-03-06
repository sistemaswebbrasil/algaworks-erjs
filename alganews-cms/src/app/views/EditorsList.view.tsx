import usePageTitle from '../../core/hooks/usePageTitle'
import EditorsList from '../features/EditorsList'
import DefaultLayout from '../layouts/Default'

function EditorsListView() {
  usePageTitle('Lista de Editores')

  return (
    <DefaultLayout>
      <EditorsList />
    </DefaultLayout>
  )
}

export default EditorsListView
