import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

function RoomPage() {
  const { query } = useRouter();
  const roomId = query.roomId as string;
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn()}></button>
      </div>
    );
  }
  return <div>Welcome to room {roomId}</div>;
}

export default RoomPage();
