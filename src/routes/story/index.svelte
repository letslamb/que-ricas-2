<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`story.json`)
      .then((r) => r.json())
      .then((story) => {
        return { story };
      });
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import BaseSEO from "../../components/BaseSEO.svelte";
  import ImageLoader from "./../../components/images/ImageLoader.svelte";
  import Card from "./../../components/Card.svelte";

  export let story;

  const [darStory, saharStory] = story;

  const { page } = stores();
</script>

<BaseSEO
  title="Our Story"
  description="Sahar loves bringing you the best South American food in Haddon Township at Que Ricas"
  canonical={`https://www.que-ricas.com${$page.path}`}
  image={saharStory.image}
  imageExtension={saharStory.imageExtension}
  altText={saharStory.altText}
/>

<article class="page-content">
  <Card>
    <section>
      <figure class="image__article sahar">
        <ImageLoader
          imageSlug={saharStory.imageSlug}
          imageExtension={saharStory.imageExtension}
          allImages={saharStory.allImages}
          processedImageSizes={saharStory.imageSizes}
          src={saharStory.image}
          alt={saharStory.altText}
          sizes={`(min-width: 1530px) 466px, (min-width: 960px) 27vw, (min-width: 10px) 38vw`}
          rounded={true}
        />
      </figure>
      <div class="text__article">
        {@html saharStory.html}
      </div>
    </section>
  </Card>

  <Card>
    <section>
      <figure class="image__article dar">
        <ImageLoader
          imageSlug={darStory.imageSlug}
          imageExtension={darStory.imageExtension}
          allImages={darStory.allImages}
          processedImageSizes={darStory.imageSizes}
          src={darStory.image}
          alt={darStory.altText}
          sizes={`(min-width: 1530px) 466px, (min-width: 960px) 27vw, (min-width: 10px) 38vw`}
          rounded={true}
        />
      </figure>
      <div class="text__article">
        {@html darStory.html}
      </div>
    </section>
  </Card>
</article>

<style>
  section {
    overflow: hidden;
  }
  .image__article {
    max-width: 40%;
    overflow: hidden;
  }

  .sahar {
    float: left;
    margin: 0 20px 15px 0;
  }

  .dar {
    float: right;
    margin: 0 0 15px 20px;
  }

  .text__article {
    line-height: 1.75;
  }
</style>
