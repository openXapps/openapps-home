import { type NextRequest } from "next/server"

type AppItem = {
  name: string
  url: string
}

const applist: AppItem[] = [
  {
    name: "Movies",
    url: "/movies"
  },
  {
    name: "Notes",
    url: "/notes"
  },
  {
    name: "CryptoPASS",
    url: "/cryptopass"
  },
  {
    name: "My List",
    url: "/mylist"
  },
  {
    name: "Bookmarker",
    url: "/bookmarker"
  }
]

export async function GET(request: NextRequest, { params }: { params: Promise<{ apps: string }> }) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  let response = {}

  console.log("*** query ***", query);

  if (query === "applist") response = applist

  return Response.json(response)
}