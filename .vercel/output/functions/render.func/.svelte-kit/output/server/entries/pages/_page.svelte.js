import { c as create_ssr_component, b as add_attribute, v as validate_component, k as compute_rest_props, h as createEventDispatcher, f as spread, l as escape_attribute_value, g as escape_object, e as each, d as escape } from "../../chunks/index.js";
import clsx from "clsx";
import { I as Icon } from "../../chunks/Icon.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="${"container flex flex-col gap-6"}"><div class="${"py-8"}"><button type="${"button"}"${add_attribute("class", clsx("py-3 px-5 mb-12 flex gap-4 items-center text-base", "bg-[#FEE9DE] text-red-primary rounded-full"), 0)}><span>More than Faster</span>
				<img src="${"Cherry.png"}" alt="${"Cherry"}"></button>

			<h1 class="${"text-6xl font-rubik text-base-black-1 mb-6"}">Claim Best Offer on Fast <span class="${"text-7xl text-red-primary font-lobster2 italic"}">Food</span>
				&amp; <span class="${"text-7xl text-red-primary font-lobster2 italic"}">Restaurants</span></h1>

			<p class="${"text-base-black-2 text-lg"}">Our job is to filling your tummy with delicious food and with fast and free delivery
			</p>

			<div class="${"mt-6 flex flex-col gap-6"}"><button type="${"button"}" class="${"bg-red-primary py-6 px-10 w-full text-white rounded-full text-lg"}">Get Started
				</button>
				<button type="${"button"}" class="${"flex gap-4 items-center justify-center group"}"><div class="${"bg-[#F2C94C] rounded-full w-12 h-12 flex justify-center items-center text-2xl group-hover:animate-pulse"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:play-arrow-rounded"
    },
    {},
    {}
  )}</div>
					<span class="${"text-lg text-base-black-2"}">Watch Video </span></button></div></div>
		<img loading="${"lazy"}" src="${"Food1.webp"}" alt="${"Food illustrations"}"></div></div>`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="${"splide__list"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const splide_min = "";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spoonApiKey } = $$props;
  let mealsData = { results: [] };
  if ($$props.spoonApiKey === void 0 && $$bindings.spoonApiKey && spoonApiKey !== void 0)
    $$bindings.spoonApiKey(spoonApiKey);
  return `<div class="${"container py-10"}"><h6 class="${"text-center text-red-primary font-semibold text-lg mb-4"}">OUR MENU</h6>
	<h1 class="${"font-rubik font-bold text-5xl text-center mb-6"}">Menu That Always Makes You Fall In Love
	</h1>

	${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        gap: "1rem",
        autoplay: true,
        perPage: 1,
        heightRatio: 1.2
      },
      "aria-label": "My Favorite Images"
    },
    {},
    {
      default: () => {
        return `${mealsData?.results?.length > 0 ? `${each(mealsData.results, (p, i) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"h-full overflow-hidden rounded-[30px] relative"}"><img class="${"w-full h-full object-cover object-center"}"${add_attribute("src", p.image, 0)} loading="${"lazy"}" alt="${"p.title"}">
						<div class="${"absolute inset-0 text-white bg-warp flex flex-col justify-end py-10 px-6 gap-4"}"><h5 class="${"text-3xl"}">${escape(p.title)}</h5>
							<span class="${"text-2xl text-[#F2C94C]"}">$<b class="${"text-4xl text-white"}">${escape((i * 2 + Math.random()).toFixed(2))}</b></span>

							<button type="${"button"}" class="${"w-min flex whitespace-nowrap items-center gap-2 text-lg"}">Order Now ${validate_component(Icon, "Icon").$$render($$result, { icon: "fe:arrow-right" }, {}, {})}</button>
						</div></div>
				`;
            }
          })}`;
        })}` : ``}`;
      }
    }
  )}</div>`;
});
const ServiceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgSrc } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0)
    $$bindings.imgSrc(imgSrc);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="${"py-4 flex flex-col items-center gap-y-3"}"><img class="${"w-4/5 mx-auto"}"${add_attribute("src", imgSrc, 0)} loading="${"lazy"}"${add_attribute("alt", title, 0)}>
	<h3 class="${"font-bold text-3xl"}">${escape(title)}</h3>
	<p class="${"text-lg text-center"}">${escape(description)}</p></div>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container py-10"}"><h6 class="${"text-center text-red-primary font-semibold text-lg mb-4"}">WHAT WE SERVE</h6>
	<h1 class="${"font-rubik font-bold text-5xl text-center mb-6"}">Your Favourite Food Delivery Partner
	</h1>
	<div>${validate_component(ServiceCard, "ServiceCard").$$render(
    $$result,
    {
      imgSrc: "Order.webp",
      title: "Easy To Order",
      description: "You only need a few steps in ordering food"
    },
    {},
    {}
  )}
		${validate_component(ServiceCard, "ServiceCard").$$render(
    $$result,
    {
      imgSrc: "TakeAway.webp",
      title: "Fastest Delivery",
      description: "Delivery that is always ontime even faster"
    },
    {},
    {}
  )}
		${validate_component(ServiceCard, "ServiceCard").$$render(
    $$result,
    {
      imgSrc: "Waiters.webp",
      title: "Best Quality",
      description: "Not only fast for us quality is also number one"
    },
    {},
    {}
  )}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { spoonApiKey } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(Services, "Services").$$render($$result, {}, {}, {})}
	${validate_component(Menu, "Menu").$$render($$result, { spoonApiKey }, {}, {})}</div>`;
});
export {
  Page as default
};
