import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  })

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...images, ...images, ...images].map((image, index) => (
            //just for getting errrors out, but dont use index as a key!!
            <div key={image.id + '-' + index} className="w-48 flex flex-col">

              <img src={image.url} alt="image" />
              <div>{image.name} </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}
