import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { auth } from "~/auth";

import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  return (
    <main className="border-red flex h-screen w-full flex-col items-center justify-evenly border-2 bg-background p-5 text-foreground">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-5xl font-medium">Styles</p>
        <p className="text-xl text-foreground2">
          Edit styles/globals.css to make changes
        </p>
      </div>

      <div className="flex w-[140px] flex-col items-center gap-2">
        <p className="text-foreground2">Background</p>
        <div className="h-[60px] w-full rounded-sm border-2 border-border bg-background" />
      </div>

      <div className="flex w-[140px] flex-col items-center gap-2">
        <p className="text-foreground2">Card</p>
        <div className="h-[60px] w-full rounded-sm border border-border bg-card" />
      </div>

      <div className="flex w-[140px] flex-col items-center gap-2">
        <p className="text-foreground2">border</p>
        <div className="h-[60px] w-full rounded-sm border border-border bg-border" />
      </div>

      <div className="flex w-[140px] flex-col items-center gap-2">
        <p className="text-foreground2">primary</p>
        <div className="h-[60px] w-full rounded-sm border border-border bg-primary" />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await auth();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
