
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

async function Images() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  })
  return (
    <div className="flex flex-wrap gap-4">
      {
        images.map((image) => (
          //just for getting errrors out, but dont use index as a key!!
          <div key={image.id} className="w-48 flex flex-col">

            <img src={image.url} alt="image" />
            <div>{image.name} </div>
          </div>
        ))
      }
    </div>
  )
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className='h-full w-full text-2xl text-center'> Please Sign In</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>

    </main>
  )
}
