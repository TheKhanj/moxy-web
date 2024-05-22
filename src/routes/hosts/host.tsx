import { useParams } from "react-router-dom";

export function Host() {
  const params = useParams();
  const { hostId } = params;

  return <div>Host {hostId} </div>;
}
