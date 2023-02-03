import { c as create_ssr_component, b as add_attribute, v as validate_component, e as each, d as escape } from "../../chunks/index.js";
import clsx from "clsx";
import { I as Icon } from "../../chunks/Icon.js";
const app = "";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", clsx(className), 0)} width="${"45"}" height="${"45"}" viewBox="${"0 0 45 45"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><rect width="${"45"}" height="${"45"}" fill="${"#EB0029"}"></rect><path d="${"M16.228 8.576V10.22H12.796V11.996H15.364V13.592H12.796V17H10.744V8.576H16.228Z"}" fill="${"#F2F2F2"}"></path><path d="${"M29.728 17.084C28.936 17.084 28.208 16.9 27.544 16.532C26.888 16.164 26.364 15.652 25.972 14.996C25.588 14.332 25.396 13.588 25.396 12.764C25.396 11.94 25.588 11.2 25.972 10.544C26.364 9.888 26.888 9.376 27.544 9.008C28.208 8.64 28.936 8.456 29.728 8.456C30.52 8.456 31.244 8.64 31.9 9.008C32.564 9.376 33.084 9.888 33.46 10.544C33.844 11.2 34.036 11.94 34.036 12.764C34.036 13.588 33.844 14.332 33.46 14.996C33.076 15.652 32.556 16.164 31.9 16.532C31.244 16.9 30.52 17.084 29.728 17.084ZM29.728 15.212C30.4 15.212 30.936 14.988 31.336 14.54C31.744 14.092 31.948 13.5 31.948 12.764C31.948 12.02 31.744 11.428 31.336 10.988C30.936 10.54 30.4 10.316 29.728 10.316C29.048 10.316 28.504 10.536 28.096 10.976C27.696 11.416 27.496 12.012 27.496 12.764C27.496 13.508 27.696 14.104 28.096 14.552C28.504 14.992 29.048 15.212 29.728 15.212Z"}" fill="${"#F2F2F2"}"></path><path d="${"M13.9 26.576C14.788 26.576 15.564 26.752 16.228 27.104C16.892 27.456 17.404 27.952 17.764 28.592C18.132 29.224 18.316 29.956 18.316 30.788C18.316 31.612 18.132 32.344 17.764 32.984C17.404 33.624 16.888 34.12 16.216 34.472C15.552 34.824 14.78 35 13.9 35H10.744V26.576H13.9ZM13.768 33.224C14.544 33.224 15.148 33.012 15.58 32.588C16.012 32.164 16.228 31.564 16.228 30.788C16.228 30.012 16.012 29.408 15.58 28.976C15.148 28.544 14.544 28.328 13.768 28.328H12.796V33.224H13.768Z"}" fill="${"#F2F2F2"}"></path><path d="${"M28.728 35.084C27.936 35.084 27.208 34.9 26.544 34.532C25.888 34.164 25.364 33.652 24.972 32.996C24.588 32.332 24.396 31.588 24.396 30.764C24.396 29.94 24.588 29.2 24.972 28.544C25.364 27.888 25.888 27.376 26.544 27.008C27.208 26.64 27.936 26.456 28.728 26.456C29.52 26.456 30.244 26.64 30.9 27.008C31.564 27.376 32.084 27.888 32.46 28.544C32.844 29.2 33.036 29.94 33.036 30.764C33.036 31.588 32.844 32.332 32.46 32.996C32.076 33.652 31.556 34.164 30.9 34.532C30.244 34.9 29.52 35.084 28.728 35.084ZM28.728 33.212C29.4 33.212 29.936 32.988 30.336 32.54C30.744 32.092 30.948 31.5 30.948 30.764C30.948 30.02 30.744 29.428 30.336 28.988C29.936 28.54 29.4 28.316 28.728 28.316C28.048 28.316 27.504 28.536 27.096 28.976C26.696 29.416 26.496 30.012 26.496 30.764C26.496 31.508 26.696 32.104 27.096 32.552C27.504 32.992 28.048 33.212 28.728 33.212Z"}" fill="${"#F2F2F2"}"></path></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"container flex justify-between"}"><div class="${"flex gap-4 items-center"}">${validate_component(Logo, "Logo").$$render($$result, { className: "w-6 h-6" }, {}, {})}
		<h4 class="${"font-semibold text-lg md:text-2xl"}">Foodeli</h4></div>

	<button class="${"text-xl"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "charm:menu-hamburger" }, {}, {})}</button></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const FOOTERS = [
    {
      title: "About",
      items: ["About Us", "Features", "News", "Menu"]
    },
    {
      title: "Company",
      items: ["Why Foodeli?", "Partner With Us", "FAQ", "Blog"]
    },
    {
      title: "Support",
      items: ["Account", "Support Center", "Feedback", "Contact Us", "Accessibilty"]
    },
    {
      title: "Get in Touch",
      items: ["Question or feedback?", "We'd love to hear from you"]
    }
  ];
  return `<footer class="${"container flex flex-col gap-8"}"><div class="${"flex flex-col gap-y-8"}"><div class="${"flex gap-4 items-center"}">${validate_component(Logo, "Logo").$$render($$result, { className: "w-6 h-6" }, {}, {})}
			<h4 class="${"font-semibold text-lg md:text-2xl"}">Foodeli</h4></div>
		<p class="${"text-base text-base-black-2"}">Our job is to filling your tummy with delicious food and with fast and free delivery.
		</p>
		<div class="${"flex gap-10 text-red-primary text-2xl"}"><a href="${"/"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxl:instagram-alt" }, {}, {})}</a>
			<a href="${"/"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxl:facebook-square" }, {}, {})}</a>
			<a href="${"/"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "bxl:twitter" }, {}, {})}</a></div></div>
	<div class="${"grid grid-cols-2 gap-8"}">${each(FOOTERS, ({ title, items }, i) => {
    return `<div><h6 class="${"font-rubik font-semibold text-xl mb-6"}">${escape(title)}</h6>
				<ul class="${"gap-y-4 flex flex-col"}">${each(items, (item) => {
      return `<li class="${"text-base"}">${escape(item)}</li>`;
    })}</ul>
				${i === FOOTERS.length - 1 ? `<button type="${"button"}"${add_attribute("class", clsx("text-base font-normal py-3 px-5 flex items-center gap-5", "border-[#BDBDBD] border border-solid rounded-full mt-6"), 0)}><span class="${""}">Email Us</span>
						${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "carbon:send",
        class: "text-red-primary text-xl"
      },
      {},
      {}
    )}
					</button>` : ``}
			</div>`;
  })}</div></footer>

<div class="${"w-full text-sm text-slate-400 text-center py-4"}">2023 • Built with all <span class="${"text-red-primary"}">♥</span> I have.
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
