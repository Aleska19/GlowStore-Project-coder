import Layout from "../../component/Layout/Layout"


function AboutUs (){
    return(
        <Layout>
          <div className="flex justify-center flex-col items-center p-10 right-10 left-10">

            <div className=" background-about-me shadow-lg  sm:bg-cover md-bg-cover  relative">
             <h1 className="p-5 text-marronSuave  font-bold text-6xl absolute z-10  left-52 top-40">GlowStore</h1>
             <figure>
                <img src="https://i.pinimg.com/736x/81/5c/cc/815cccd6fa5b54fa4d2d03356357453e.jpg" alt=""  className="h-96 w-full "/>
             </figure>
            </div>
            

            <section className="flex flex-col-reverse gap-5 justify-evenly pt-10">
                <p className=" font-light text-md text-center font-sans pr-10 pl-10">At GlowStore, we are passionate about offering eco-friendly products designed for modern women who value quality, style, and sustainability. From wooden combs to eco-friendly furniture, every product in our store is carefully selected to help you live a greener and more conscious life.</p>

            </section>
         </div>
        </Layout>
    )
}

export default AboutUs