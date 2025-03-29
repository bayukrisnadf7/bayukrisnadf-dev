import { useEffect, useState } from "react";
const Section4 = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs);
      });
  });

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <h2 className="py-20 text-3xl font-bold text-center">Blogs</h2>
      <div className="flex justify-center gap-10">
        <img
          src="img/blogs-1.jpg"
          alt=""
          className="w-[500px] h-[350px] rounded-xl"
        />
        <div className="flex flex-col gap-4 mx-2 text-white">
          <div className="flex gap-5 items-center">
            <p className="bg-[#FFA28B] p-2 px-5 rounded-xl">News</p>
            <p className="bg-[#939AFF] p-2 px-5 rounded-xl">Inspiration</p>
            <p>22 December 2023</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-white font-bold text-2xl">
                Mengenal React dan Kelebihannya
              </p>
            </div>
            <p className="max-w-[550px]">
              React adalah pustaka JavaScript yang digunakan untuk membangun
              antarmuka pengguna (UI) secara efisien dan dinamis. React membantu
              dalam memisahkan logika dan tampilan sehingga kode lebih
              terstruktur dan mudah dikelola.
            </p>
            <p className="max-w-[550px]">
              Salah satu fitur utama React adalah Virtual DOM, yang memungkinkan
              pembaruan UI menjadi lebih cepat dan efisien dibandingkan
              manipulasi langsung terhadap DOM.
            </p>
            <p className="cursor-pointer hover:text-[#939AFF] mt-5">Baca selengkapnya ...</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center md:mx-20 mx-5 mt-20">
        {blogs.map((blog) => (
          <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900">
            <img
              src={blog.image}
              alt=""
              className="rounded-xl w-[500px] h-[250px]"
            />
            <div className="flex flex-col gap-4 mx-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white font-bold text-2xl">{blog.title}</p>
                  <p>{blog.date}</p>
                </div>
                <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Section4;
