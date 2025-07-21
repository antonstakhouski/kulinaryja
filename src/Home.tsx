import Kulinaryja from "./assets/kulinaryja.png";

const Home = () => {
  return (
    <>
      <h1>Welcome to Kulinaryja!</h1>
      <img src={Kulinaryja} alt="Kulinaryja" className="kulinaryja-logo" />
      <p>
        Welcome to Kulinaryja, a personal project by Anton Stakhouski dedicated
        to preserving and sharing the rich culinary traditions of Belarus. This
        site is more than just a collection of recipes—it's a heartfelt tribute
        to the flavors, stories, and heritage that have shaped Belarusian
        cuisine over generations.
      </p>
      <p>
        Kulinaryja brings together a curated selection of traditional Belarusian
        dishes, each lovingly documented and, where appropriate, enhanced with
        modern techniques or ingredients. Whether you are a fellow Belarusian
        looking to reconnect with the tastes of home, or a curious food
        enthusiast eager to explore new culinary horizons, you’ll find
        inspiration and guidance here.
      </p>
      <p>
        Every recipe on this site is accompanied by detailed instructions,
        helpful tips, and, in many cases, a glimpse into the history and
        cultural significance of the dish. From hearty soups and rustic breads
        to delicate desserts, Kulinaryja aims to capture the essence of
        Belarusian cooking—simple, wholesome, and deeply rooted in the land and
        its people.
      </p>
      <p>
        But Kulinaryja is more than just a recipe book. It’s an interactive
        platform designed to foster a sense of community among those who cherish
        Belarusian food. You are invited to explore, experiment, and share your
        own experiences as you cook your way through these time-honored recipes.
      </p>
      <p>
        By making this collection accessible to both Belarusians and the wider
        world, I hope to promote our unique culinary heritage and encourage a
        deeper appreciation for the traditions that make Belarusian cuisine so
        special. Whether you’re here to rediscover family favorites or to embark
        on a new gastronomic adventure, I’m delighted to welcome you to
        Kulinaryja.
      </p>
    </>
  );
};

export default Home;
