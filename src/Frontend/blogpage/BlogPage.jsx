import React from "react";

const BlogPage = ({params}) => {
  console.log("params :",params);
  
  const cards = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    category: "Web Development",
    title: `Title ${index + 1}`,
    description: "Short post description.",
  }));

  return (
    <div>
      <main>
        <article>
          <header className="mx-auto max-w-screen-xl pt-28 text-center">
            <p className="text-gray-500">Published April 4, 2022</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
              Post Number : 
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              You're doing marketing the wrong way
            </p>

            <img
              className="sm:h-[34rem] mt-10 w-full object-contain"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Featured"
            />
          </header>

          <div className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
            <strong className="text-2xl font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              impedit ex consequatur nostrum cupiditate at sequi? Ipsam commodi
              modi officia mollitia doloribus tenetur consectetur quae?
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim maxime sit laudantium! Dolore atque, maxime iusto ut quas
              distinctio reiciendis animi voluptatibus soluta molestias,
              mollitia officiis laboriosam illum earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus similique reiciendis et recusandae provident repellendus
              rem doloremque eaque error assumenda?
            </p>
          </div>
        </article>
      </main>

      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600"></div>
        <div className="h-0.5 w-32 bg-gray-600"></div>
        <div className="h-0.5 w-2 bg-gray-600"></div>
      </div>

      <aside
        aria-label="Related Articles"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">
          More Blogs
        </h2>

        <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
          {cards.map((card,index) => (
            <article
              key={index}
              className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg"
            >
              <a href="#">
                <img
                  src={card.img}
                  className="max-h-52 w-full object-cover"
                  alt={card.title}
                />
                <div className="p-4">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-700">
                    {card.category}
                  </p>
                  <h3 className="font-bold">{card.title}</h3>
                  <p className="text-gray-700 mt-2">{card.description}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
