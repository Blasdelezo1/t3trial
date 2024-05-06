import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/873dde72-de95-4d32-b9c3-755d8ed32fd7-2l6z6t.png",
  "https://utfs.io/f/cde5ce39-242b-4e8a-bd64-2e528c012691-2dhsdw.png",
  "https://utfs.io/f/070976a5-f14e-4f9e-a3d1-4a1a16488f86-t588.png",
  "https://utfs.io/f/96e4cbaa-6384-4dab-a01b-cea0f922048d-e3n68f.png",
]


const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {


  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))
      }
      </div>
    </main>
  );
}
