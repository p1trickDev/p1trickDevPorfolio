export function Content() {
  return (
    <>
      <article
        style={{
          maxWidth: 800,
          padding: "150px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          margin: "0 auto",
        }}
      >
        {/* Add blog content with enough text to enable scrolling */}
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Exploring Modern Web Development
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          rhoncus quam.
        </p>
        {/* Add many more paragraphs similar to your original content */}
        <p>
          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
          imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
          Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
          blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
          ipsum tellus, eu tincidunt neque tincidunt a.
        </p>
        <h2>Getting Started</h2>
        <p>
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur
          tincidunt odio, sit amet laoreet massa fringilla eu.
        </p>
        {/* Continue with more content similar to your original */}
      </article>
    </>
  );
}
