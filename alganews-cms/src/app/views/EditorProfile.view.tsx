import { useParams } from "react-router-dom";
import EditorsProfile from "../features/EditorProfile";
import DefaultLayout from "../layouts/Default";

export default function EditorProfileView() {
    const params = useParams<{id:string}>()

    return (
        <DefaultLayout>
            <EditorsProfile hidePersonalData={params.id === '1' ? false : true} />
        </DefaultLayout>
    )
}
