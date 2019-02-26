import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import profilePicture from "../images/profilePicture.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`tailwindcss`, `Jtcruthers`, `Justin`, `Carruthers`]}
      />
      <div className="text-center">
        <img className="rounded-full sm:w-32 md:w-64" src={profilePicture} alt="My handsome mug" />
        <h1 className="mb-8">Justin Carruthers</h1>
        <p className="border-l-4 border-red-lighter leading-loose pl-2">This is my react site. It is made with Gatsby and TailwindCSS. I plan on updating it with some new stuff soon</p>
      </div>
    </Layout>
  )
}

export default IndexPage;
