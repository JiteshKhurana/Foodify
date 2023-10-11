import {useState} from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="border border-red-400 p-5 m-5">
      <h3 className="text-2xl font-bold">{title}</h3>
      {isVisible ? (
        <div>
        <button
          className="border border-red-500 p-2 bg-red-200"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
        <p>{desc}</p>
        </div>
      ) : (
        <button
          className="border border-red-500 p-2 bg-red-200"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection,SetVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-4xl font-bold p-5 m-5">Instamart</h1>
      <Section
        isVisible={visibleSection == "about"}
        title={"About Instamart"}
        desc={
          "te quas ducimus minus explicabo impedit aliquid laudantium soluta recusandae. Velit aperiam nobis quis recusandae rem animi accusamus eligendi iure fugiat, tempore fuga suscipit rerum incidunt omnis minima facilis laboriosam. Totam tempore fugit, doloremque sapiente quidem, delectus voluptatum officiis expedita doloribus vel consectetur non similique ducimus, nesciunt architecto laborum minus repudiandae minima in molestiae nemo deserunt voluptas ex. Sequi modi nostrum doloremque molestias necessitatibus quibusdam reprehenderit unde tempore perferendis! Reiciendis dolores labore nostrum ab reprehenderit error aperiam enim, sed quod fugit, architecto ducimus alias. At iusto totam, porro omnis qui nisi aspernatur natus aliquid voluptatem deleniti, corrupti enim voluptate repellat! Iste consectetur, possimus cumque eveniet expedita alias facere architecto corrupti? Ex sint accusantium non facere sapiente pariatur quae nemo ullam explicabo odio dolorum, quidem aliquam. Voluptate neque dicta porro enim a deserunt dolores quam voluptates non, iure eaque asperiores minima quia perspiciatis quae qui natus nisi quaerat sed magni atque quibusdam, voluptatum unde sequi! Voluptates sint officiis ratione voluptas, atque quo fuga architecto, consectetur corrupti vel consequatur accusantium fugit! Repellendus quasi fugiat, voluptates nobis minus cum ea minima, magnam tempore necessitatibus nesciunt voluptas praesentium."
        }
        setIsVisible={(isVisible) => {
          isVisible ? SetVisibleSection("about") : SetVisibleSection("");
        }}
      />
      <Section
        isVisible={visibleSection == "team"}
        title={"Team Instamart"}
        desc={
          "cimus minus explicabo impedit aliquid laudantium soluta recusandae. Velit aperiam nobis quis recusandae rem animi accusamus eligendi iure fugiat, tempore fuga suscipit rerum incidunt omnis minima facilis laboriosam. Totam tempore fugit, doloremque sapiente quidem, delectus voluptatum officiis expedita doloribus vel consectetur non similique ducimus, nesciunt architecto laborum minus repudiandae minima in molestiae nemo deserunt voluptas ex. Sequi modi nostrum doloremque molestias necessitatibus quibusdam reprehenderit unde tempore perferendis! Reiciendis dolores labore nostrum ab reprehenderit error aperiam enim, sed quod fugit, architecto ducimus alias. At iusto totam, porro omnis qui nisi aspernatur natus aliquid voluptatem deleniti, corrupti enim voluptate repellat! Iste consectetur, possimus cumque eveniet expedita alias facere architecto corrupti? Ex sint accusantium non facere sapiente pariatur quae nemo ullam explicabo odio dolorum, quidem aliquam. Voluptate neque dicta porro enim a deserunt dolores quam voluptates non, iure eaque asperiores minima quia perspiciatis quae qui natus nisi quaerat sed magni atque quibusdam, voluptatum unde sequi! Voluptates sint officiis ratione voluptas, atque quo fuga architecto, consectetur corrupti vel consequatur accusantium fugit! Repellendus quasi fugiat, voluptates nobis minus cum ea minima, magnam tempore necessitatibus nesciunt voluptas praesentium."
        }
        setIsVisible={(isVisible) => {
          isVisible ? SetVisibleSection("team") : SetVisibleSection("");
        }}
      />
      <Section
        isVisible={visibleSection == "career"}
        title={"Careers Instamart"}
        desc={
          "luptatem? Placeat nulla cupiditate quas dusoluta recusandae. Velit aperiam nobis quis recusandae rem animi accusamus eligendi iure fugiat, tempore fuga suscipit rerum incidunt omnis minima facilis laboriosam. Totam tempore fugit, doloremque sapiente quidem, delectus voluptatum officiis expedita doloribus vel consectetur non similique ducimus, nesciunt architecto laborum minus repudiandae minima in molestiae nemo deserunt voluptas ex. Sequi modi nostrum doloremque molestias necessitatibus quibusdam reprehenderit unde tempore perferendis! Reiciendis dolores labore nostrum ab reprehenderit error aperiam enim, sed quod fugit, architecto ducimus alias. At iusto totam, porro omnis qui nisi aspernatur natus aliquid voluptatem deleniti, corrupti enim voluptate repellat! Iste consectetur, possimus cumque eveniet expedita alias facere architecto corrupti? Ex sint accusantium non facere sapiente pariatur quae nemo ullam explicabo odio dolorum, quidem aliquam. Voluptate neque dicta porro enim a deserunt dolores quam voluptates non, iure eaque asperiores minima quia perspiciatis quae qui natus nisi quaerat sed magni atque quibusdam, voluptatum unde sequi! Voluptates sint officiis ratione voluptas, atque quo fuga architecto, consectetur corrupti vel consequatur accusantium fugit! Repellendus quasi fugiat, voluptates nobis minus cum ea minima, magnam tempore necessitatibus nesciunt voluptas praesentium."
        }
        setIsVisible={(isVisible) => {
          isVisible ? SetVisibleSection("career") : SetVisibleSection("");
        }}
      />
    </div>
  );
};

export default Instamart;
