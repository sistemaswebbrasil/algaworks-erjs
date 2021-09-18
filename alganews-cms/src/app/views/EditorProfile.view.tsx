import { useParams } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import EditorsProfile from "../features/EditorProfile";
import DefaultLayout from "../layouts/Default";

export default function EditorProfileView() {
    const params = useParams<{id:string}>()

    return (
        <DefaultLayout>
            <ErrorBoundary>
            <EditorsProfile hidePersonalData={params.id === '1' ? false : true} />
            </ErrorBoundary>
        </DefaultLayout>
    )
}
